// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const employeesController = require('../controllers/employeesController')

// ALL Employee Route
// GET /api/employees/
router.route('/')
  .get(employeesController.getAllEmployees)

// EMPLOYEE Employee Routes
// POST /api/employee/create
router.route('/create')
  .post(employeesController.createEmployee) // route > 'createShift' in 'shiftsController'

router.route('/edit')
  .put(employeesController.editEmployee) // route > 'createShift' in 'shiftsController'

// TODO: Not implemented
router.route('/:id')
  .delete(employeesController.destroyEmployee)

// MANAGER Shift Routes

module.exports = router
