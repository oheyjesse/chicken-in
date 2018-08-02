require('dotenv').config()
const mongoose = require('mongoose')
const moment = require('moment')
const bcrypt = require('bcryptjs')
const { Business } = require('../models/Business')
const { Manager } = require('../models/Manager')
const { Employee } = require('../models/Employee')
const { Shift } = require('../models/Shift')
const { calculateTime } = require('./calculateTime')

const generateShifts = async (employeesArray, businessId, overtimeMultiplier, doubleTimeMultiplier) => {
  const statuses = ['pending']

  // 1. Generate shifts
  const shiftsArray = []
  for (let i = 0; i < 15; i++) {
    // Pick a random employee
    let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

    // Set random start and end times
    let startTime = Math.ceil(Math.random() * 720)
    let endTime = startTime + Math.ceil(Math.random() * 720)

    let shiftDate = moment()

    let { standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay } = calculateTime(shiftDate, startTime, endTime, randomEmployee.standardRate, overtimeMultiplier, doubleTimeMultiplier)

    let newShift = new Shift({
      employee: randomEmployee._id,
      date: shiftDate,
      location: randomEmployee.locations[Math.floor(Math.random() * randomEmployee.locations.length)],
      startTime: startTime,
      endTime: endTime,
      standardMinutes: standardMinutes,
      overtimeMinutes: overtimeMinutes,
      doubleTimeMinutes: doubleTimeMinutes,
      totalPay: totalPay,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      business: businessId
    })

    shiftsArray.push(newShift)
  }

  // 2. Return shifts
  return shiftsArray
}

const updateShifts = () => {
  setInterval(async () => {
    // 1. Get businessId
    const business = await Business.find()
    const businessId = business[0]._id

    // 2. Acknowledge all rejected shifts
    const rejectedShifts = await Shift.find()
      .and([ { business: businessId }, { status: 'rejected' } ])

    await rejectedShifts.forEach((shift) => {
      shift.set({
        status: 'archived'
      })
      shift.save()
    })
    console.log('Rejected shifts updated successfully')

    // 3. Update pending shifts (some to approved, some to rejected)
    const availableOptions = ['approved', 'approved', 'approved', 'approved', 'approved', 'approved', 'rejected']
    const pendingShifts = await Shift.find()
      .and([ { business: businessId }, { status: 'pending' } ])

    await pendingShifts.forEach((shift) => {
      shift.set({
        status: availableOptions[Math.floor(Math.random() * availableOptions.length)]
      })
      shift.save()
    })
    console.log('Pending shifts updated successfully')
  }, (1000 * 60 * 60 * 24 * 7))
}

const createShifts = () => {
  setInterval(async () => {
    // 1. Get businessId
    const business = await Business.find()
    const businessId = business[0]._id
    const overtimeMultiplier = business[0].overtimeMultiplier
    const doubleTimeMultiplier = business[0].doubleTimeMultiplier

    // 2. Create new pending shifts
    const employeesArray = await Employee.find()
    const shiftsArray = await generateShifts(employeesArray, businessId, overtimeMultiplier, doubleTimeMultiplier)
    let done = 0
    for (let i = 0; i < shiftsArray.length; i++) {
      await shiftsArray[i].save()
      done++
      if (done === shiftsArray.length) {
        // 7. Disconnect from database
        console.log('New shifts added successfully')
      }
    }
  }, (1000 * 60 * 60 * 24))
}

module.exports = { updateShifts, createShifts }
