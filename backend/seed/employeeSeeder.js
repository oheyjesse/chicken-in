require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { Employee } = require('../models/Employee')

const generateEmployees = async () => {
  // 1. Generate the salt
  const salt = await bcrypt.genSalt(10)

  // 2. Create the hashed password
  const password = await bcrypt.hash('password', salt)

  // 3. Generate employees
  const employeesArray = [
    new Employee({
      firstName: 'Steven',
      lastName: 'Salad',
      email: 'steve@redrocks.com',
      password: password,
      locations: ['Springvale', 'Hobart', 'Sunshine'],
      standardRate: 2000, // cents
      business: 123
    }),
    new Employee({
      firstName: 'Maggie',
      lastName: 'Mallad',
      email: 'maggie@redrocks.com',
      password: password,
      locations: [ 'Melbourne', 'Sydney', 'Perth' ],
      standardRate: 6000, // cents
      business: 123
    })
  ]

  // 4. Return employees
  return employeesArray
}

const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(async () => {
    console.log('🛢  ✅ Mongo Connection established.')
    const employees = await generateEmployees()
    let done = 0
    for (let i = 0; i < employees.length; i++) {
      employees[i].save()
        .then(() => {
          done++
          if (done === employees.length) {
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
