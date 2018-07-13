// import model for use in controller functions
const User = require('../models/Shift')

const createShift = (req, res) => {
  res.send('createShift Route Works 🎉')
}

const getEmployeeShifts = (req, res) => {
  res.send('getEmployeeShifts Route Works 🎉')
}

const destroyShift = (req, res) => {
  res.send('destroyShift Route Works 🎉')
}

// export all controller functions required by router
module.exports = {
  createShift,
  getEmployeeShifts,
  destroyShift
}
