// require express, and create a router
const express = require('express')
const router = express.Router()
// import the relevant controller here, so the router can point to it
const employeesController = require('../controllers/employeesController')
const { authorize } = require('../middleware/authorize')
const { authManager } = require('../middleware/authManager')

// ALL Employee Route
// GET /api/employees/
router.route('/')
  .get(employeesController.getAllEmployees) // route > 'createEmployee' in 'employeesController'

// EMPLOYEE Employee Routes
// POST /api/employee/create
router.route('/create')
  .post(employeesController.createEmployee) // route > 'createEmployee' in 'employeesController'

// EMPLOYEE Employee Routes

// EMPLOYEE Employee Routes
// GET /api/employees/
// PUT /api/employee/:id
// DELETE /api/employee/:id
router.route('/:id')
  .get(employeesController.getEmployee) // route > 'createEmployee' in 'employeesController'

  .put(employeesController.editEmployee) // route > 'editEmployee' in 'employeesController'
  .delete(employeesController.deleteEmployee) // route > 'destroyEmployee' in 'employeesController'

// MANAGER Shift Routes

module.exports = router
