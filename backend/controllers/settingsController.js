const { Business } = require('../models/Business')
// TODO: Add authorize middleware and checkManager/ checkManager middleware to all these routes

const getSettingsBusiness = (req, res) => {
  // Everything in a try/catch because mongoose does some odd things
  try {
    // Get the business Id from the jwt payload
    const businessId = '5b5037d551abab867ccd4e13' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

    Business.find({'name': 'Red Rocks Charcoal Chicken'}) // manually hacking it for now until JWT comes in
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
  } catch (error) {
    res.status(500).send('Internal Server Error (getSettingsBusiness)')
  }
}

const updateSettingsBusiness = (req, res) => {
  const { name, address, locations, overtimeMultiplier, doubleTimeMultiplier } = req.body

  // Get the business Id from the jwt payload
  const businessId = '5b4c6873f5df0100e83e5e9c' // TODO: Change this to businessId = req.user.businessId after the authorize middleware has been added

  // Create new shift object
  const settings = {
    name: name,
    address: address,
    locations: locations,
    overtimeMultiplier: overtimeMultiplier,
    doubleTimeMultiplier: doubleTimeMultiplier
  }

  try {
    // 4. Save new shift
    Business.findOneAndUpdate({'name': 'Red Rocks Charcoal Chicken'}, {'$set': settings}, {new: true}) // manually hacking it for now until JWT comes in
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
  } catch (error) {
    res.status(500).send('Internal Server Error (updateSettingsBusiness)')
  }
}

module.exports = {
  getSettingsBusiness,
  updateSettingsBusiness
}
