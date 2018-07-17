require('dotenv').config()
const mongoose = require('mongoose')
const { Business } = require('../models/Business')

const generateBusinesses = async () => {
  // 1. Generate businesses
  const businesssesArray = [
    new Business({
      name: 'Red Rocks Charcoal Chicken',
      address: '123 Fake Street',
      locations: ['Melbourne', 'Sydney', 'Perth', 'Brisbane'],
      overtimeMultiplier: 1.5,
      doubleTimeMultiplier: 2.0
    })
  ]

  // 2. Return businesses
  return businesssesArray
}

const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(async () => {
    console.log('🛢  ✅ Mongo Connection established.')
    const businesses = await generateBusinesses()
    let done = 0
    for (let i = 0; i < businesses.length; i++) {
      businesses[i].save()
        .then(() => {
          done++
          if (done === businesses.length) {
            mongoose.disconnect()
          }
        })
        .catch(() => {
          console.log('Something went wrong')
        })
    }
  })
  .catch(error => {
    console.error('💥 ❌ MONGO_CONNECT_ERROR: Have you started your mongodb?')
    console.log(`Error Details: ${error}`)
    process.exit() // Quits Server on Error
  })
