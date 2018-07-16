// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const shiftsController = require('../controllers/shiftsController')

// ALL Shift Route
// GET /api/shifts/
router.route('/')
  .get(shiftsController.getAllShifts)

// EMPLOYEE Shift Routes
// POST /api/shifts/create
router.route('/create')
  .post(shiftsController.createShift) // route > 'createShift' in 'shiftsController'

// TODO: Not implemented
router.route('/employee')
  .get(shiftsController.getEmployeeShifts)

// TODO: Not implemented
router.route('/:id')
  .delete(shiftsController.destroyShift)

// MANAGER Shift Routes

module.exports = router
