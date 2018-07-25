require('dotenv').config()
const { Business } = require('../models/Business')

const getSettingsBusiness = (req, res) => {
  // Everything in a try/catch because mongoose does some odd things
  try {
    let businessId = ''
    // Get the business Id from the jwt payload
    if (process.env.NODE_ENV === 'development') {
      businessId = '5b5037d551abab867ccd4e13' // TODO: Delete? This is only to allow for development
    } else {
      businessId = req.user.businessId
    }

    if (process.env.NODE_ENV === 'development') {
      Business.find({'name': 'Red Rocks Charcoal Chicken'}) // TODO: Delete? This is only to allow for development
        // Business.find({'_id': businessId})
        .then(business => {
          // 3. If no business is found, send back 404 (resource not found)
          if (business === null) {
            return res.status(404).send('Business Not Found')
          }
          // If found, send back the updated business
          return res.status(200).json(business)
        })
        .catch(err => {
          res.status(400).json({
            err: err.message
          })
        })
    } else {
      Business.find({'_id': businessId})
        .then(business => {
          // 3. If no business is found, send back 404 (resource not found)
          if (business === null) {
            return res.status(404).send('Business Not Found')
          }
          // If found, send back the updated business
          return res.status(200).json(business)
        })
        .catch(err => {
          res.status(400).json({
            err: err.message
          })
        })
    }
  } catch (error) {
    res.status(500).send('Internal Server Error (getSettingsBusiness)')
  }
}

const updateSettingsBusiness = (req, res) => {
  const { name, address, locations, overtimeMultiplier, doubleTimeMultiplier } = req.body

  // Get the business Id from the jwt payload
  let businessId = ''
  if (process.env.NODE_ENV === 'development') {
    businessId = '5b4c6873f5df0100e83e5e9c' // TODO: Delete? This is only to allow for development
  } else {
    businessId = req.user.businessId
  }

  // Create new shift object
  const settings = {
    name: name,
    address: address,
    locations: locations,
    overtimeMultiplier: overtimeMultiplier,
    doubleTimeMultiplier: doubleTimeMultiplier
  }

  if (req.user.isDemo) { // TODO: If the user is a demo, return a success response without updating the database
    // 1. Find the employee
    Business.find({'_id': businessId})
      .then(business => {
      // 2. If no business is found, send back 404 (resource not found)
        if (business === null) {
          return res.status(404).send('Business Not Found')
        }

        // If found, send back the business
        business.name = name
        business.address = address
        business.locations = locations
        business.overtimeMultiplier = overtimeMultiplier
        business.doubleTimeMultiplier = doubleTimeMultiplier
        return res.status(200).json(business)
      })
      .catch(err => {
        res.status(400).json({
          err: err.message
        })
      })
  }

  try {
    // 4. Save new shift
    if (process.env.NODE_ENV === 'development') {
      Business.findOneAndUpdate({'name': 'Red Rocks Charcoal Chicken'}, {'$set': settings}, {new: true}) // TODO: Delete? This is only to allow for development
      // Business.findOneAndUpdate({'_id': businessId}, {'$set': settings}, {new: true})
        .then(business => {
          // 3. If no business is found, send back 404 (resource not found)
          if (business === null) {
            return res.status(404).send('Business Not Found')
          }
          // If found, send back the updated business
          return res.status(200).json(business)
        })
        .catch(err => {
          res.status(400).json({
            err: err.message
          })
        })
    } else {
      Business.findOneAndUpdate({'_id': businessId}, {'$set': settings}, {new: true})
        .then(business => {
          // 3. If no business is found, send back 404 (resource not found)
          if (business === null) {
            return res.status(404).send('Business Not Found')
          }
          // If found, send back the updated business
          return res.status(200).json(business)
        })
        .catch(err => {
          res.status(400).json({
            err: err.message
          })
        })
    }
  } catch (error) {
    res.status(500).send('Internal Server Error (updateSettingsBusiness)')
  }
}

module.exports = {
  getSettingsBusiness,
  updateSettingsBusiness
}
