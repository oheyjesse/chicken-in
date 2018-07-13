// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const shiftsController = require('../controllers/shiftsController')

// EMPLOYEE Shift Routes
router.route('/create')
  .post(shiftsController.createShift) // route > 'createShift' in 'shiftsController'

router.route('/employee')
  .get(shiftsController.getEmployeeShifts)

router.route('/:id')
  .delete(shiftsController.destroyShift)

// MANAGER Shift Routes

module.exports = router
