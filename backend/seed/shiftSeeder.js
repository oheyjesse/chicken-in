require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment')
const { Shift } = require('../models/Shift')

const generateShifts = async () => {
  // 1. Generate shifts
  const shiftsArray = [
    new Shift({
      employee: '1', // TODO: Update when employee Ids are known
      date: moment(),
      location: 'Sydney',
      startTime: 100,
      endTime: 900,
      standardMinutes: 100,
      overtimeMinutes: 30,
      doubleTimeMinutes: 10,
      totalPay: 13200, // cents
      status: 'pending'
    }),
    new Shift({
      employee: '1', // TODO: Update when employee Ids are known
      date: moment().add(1, 'days'),
      location: 'Perth',
      startTime: 560,
      endTime: 1095,
      standardMinutes: 200,
      overtimeMinutes: 80,
      doubleTimeMinutes: 500,
      totalPay: 16400, // cents
      status: 'pending'
    }),
    new Shift({
      employee: '1', // TODO: Update when employee Ids are known
      date: moment().add(1, 'days'),
      location: 'Melbourne',
      startTime: 60,
      endTime: 367,
      standardMinutes: 50,
      overtimeMinutes: 100,
      doubleTimeMinutes: 200,
      totalPay: 9500, // cents
      status: 'pending'
    })
  ]

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
