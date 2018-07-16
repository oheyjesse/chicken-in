// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const employeesController = require('../controllers/employeesController')

// ALL Employee Route
// GET /api/employees/
router.route('/')
  .get(employeesController.getAllEmployees) // route > 'createEmployee' in 'employeesController'

// TODO: Single Get request for filter method?
router.route('/:id')
  .get(employeesController.getEmployee) // route > 'createEmployee' in 'employeesController'

// EMPLOYEE Employee Routes
// POST /api/employee/create
router.route('/create')
  .post(employeesController.createEmployee) // route > 'createEmployee' in 'employeesController'

// EMPLOYEE Employee Routes
// PUT /api/employee/edit
router.route('/edit')
  .put(employeesController.editEmployee) // route > 'editEmployee' in 'employeesController'

// EMPLOYEE Employee Routes
// DELETE /api/employee/delete
router.route('/:id')
  .delete(employeesController.deleteEmployee) // route > 'destroyEmployee' in 'employeesController'

// MANAGER Shift Routes

module.exports = router
