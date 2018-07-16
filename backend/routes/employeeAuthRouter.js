require('dotenv').config()
const express = require('express')
const router = express.Router()
const { Employee } = require('../models/Employee')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const authEmployeeController = require('../controllers/authEmployeeController')


// Request: POST auth/employee/login
// Process: check the credentials
// Response: JWT in the cookie
router.route('/login')
  .post(authEmployeeController.login)

router.post('/logout', (req, res) => {
  res.send("Works")
})
// Request: POST auth/employee/logout
// Process: Nothing
// Response: Remove the JWT from the cookie



// TODO: route Logout - Removes cookie (perhaps sends blank cookie?) - re-route to '*'
// TODO: route Registration - Create user, hash password and store, MVP log them in, and re-route to '*'

module.exports = router



// POST auth/employee/login | employee/login ** DONE **
// POST auth/employee/logout | employee/nav
// POST auth/employee/forgotPassword | employee/login
// PUT auth/employee/updatePassword | employee/settings




// // require express, and create a router
// const express = require('express')
// const router = express.Router()

// // import the relevant controller here, so the router can point to it
// const shiftsController = require('../controllers/shiftsController')

// // ALL Shift Route
// // GET /api/shifts/
// router.route('/')
//   .get(shiftsController.getAllShifts)

// // EMPLOYEE Shift Routes
// // POST /api/shifts/create
// router.route('/create')
//   .post(shiftsController.createShift) // route > 'createShift' in 'shiftsController'

// // TODO: Not implemented
// router.route('/employee')
//   .get(shiftsController.getEmployeeShifts)

// // TODO: Not implemented
// router.route('/:id')
//   .delete(shiftsController.destroyShift)

// // MANAGER Shift Routes

// module.exports = router