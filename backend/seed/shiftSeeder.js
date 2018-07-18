require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment')
const { Shift } = require('../models/Shift')

const generateShifts = async () => {
  // 1. Create required arrays
  const shiftsArray = []
  const locations = ['Melbourne', 'Sydney', 'Perth', 'Brisbane', 'Hobart', 'Donvale', 'South Yarra', 'Adelaide', 'Darwin', 'Point Cook']
  const statuses = ['pending', 'approved', 'rejected', 'archived']
  const employees = ['Steven Salad', 'Brian Ballad', 'Melissa Mallad', 'Frank Zappa', 'Trent Reznor', 'Thom Yorke', 'Kurt Cobain']

  // 2. Generate shifts
  for (let i = 0; i < 500; i++) {
    let startTime = Math.ceil(Math.random() * 1000)
    let endTime = startTime + Math.ceil(Math.random() * 1000)

    let newShift = new Shift({
      employee: employees[Math.floor(Math.random() * 7)], // TODO: Update when employee Ids are known
      date: moment().subtract(Math.floor(Math.random() * 14), 'days'),
      location: locations[Math.floor(Math.random() * 10)],
      startTime: startTime,
      endTime: endTime,
      standardMinutes: endTime - startTime,
      overtimeMinutes: Math.ceil(Math.random() * 300),
      doubleTimeMinutes: Math.ceil(Math.random() * 300),
      totalPay: Math.ceil(Math.random() * 200000), // cents
      status: statuses[Math.floor(Math.random() * 4)],
      business: '123' // TODO: Update when business Ids are known
    })

    shiftsArray.push(newShift)
  }

  // 2. Return shifts
  return shiftsArray
}

const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(async () => {
    console.log('🛢  ✅ Mongo Connection established.')
    const shifts = await generateShifts()
    let done = 0
    for (let i = 0; i < shifts.length; i++) {
      shifts[i].save()
        .then(() => {
          done++
          if (done === shifts.length) {
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
