require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Manager } = require('../models/Manager')

const generateManager = async () => {
  // 1. Generate the salt
  const salt = await bcrypt.genSalt(10)

  // 2. Create the hashed password
  const password = await bcrypt.hash('password', salt)

  // 3. Generate manager
  const newManager = [
    new Manager({
      email: 'ed@redrocks.com',
      password: password,
      business: 123
    })
  ]

  // 4. Return new manager
  return newManager
}

const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(async () => {
    console.log('🛢  ✅ Mongo Connection established.')
    const manager = await generateManager()
    let done = 0
    for (let i = 0; i < manager.length; i++) {
      manager[i].save()
        .then(() => {
          done++
          if (done === manager.length) {
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
