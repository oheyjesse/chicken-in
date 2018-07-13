// import model for use in controller functions
const { Shift } = require('../models/Shift')

const getAllShifts = (req, res) => {
  Shift.find()
    .then(shifts => {
      res.status(200).json(shifts)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

const createShift = (req, res) => {
  const {employee, date, location, startTime, endTime,
    standardMinutes, overtimeMinutes, doubleTimeMinutes, totalPay} = req.body

  const shiftJson = {
    employee: employee,
    date: date,
    location: location,
    startTime: startTime,
    endTime: endTime,
    standardMinutes: standardMinutes,
    overtimeMinutes: overtimeMinutes,
    doubleTimeMinutes: doubleTimeMinutes,
    totalPay: totalPay
  }

  const newShift = new Shift(shiftJson)
  newShift.save()
    .then(newShift => {
      res.status(200).json(newShift)
    })
    .catch(err => {
      res.status(400).json({
        err: err.message
      })
    })
}

const getEmployeeShifts = (req, res) => {
  res.status(200).json({
    message: 'getEmployeeShifts Route Works 🎉'
  })
}

const destroyShift = (req, res) => {
  res.send('destroyShift Route Works 🎉')
}

// export all controller functions required by router
module.exports = {
  createShift,
  getEmployeeShifts,
  destroyShift,
  getAllShifts
}
