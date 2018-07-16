require('dotenv').config()
const express = require('express')
const router = express.Router()
const Joi = require('joi')
const bcrypt = require('bcrypt')
const authEmployeeController = require('../controllers/authEmployeeController')
const { Employee } = require('../models/Employee')
const { authorize } = require('../middleware/authorize')

// Request: POST auth/employee/login
// Process: check the credentials
// Response: JWT in the cookie
router.route('/login')
  .post(authEmployeeController.login)

// Request: POST auth/employee/logout
// Process: Nothing
// Response: Remove the JWT from the cookie
router.route('/logout')
  .post(authEmployeeController.logout)

// Request: POST auth/employee/forgotPassword
// Process: Generate new password for employee, update the employee doucment with the new password, send email with new password to smeployee
// Response: Message that the email has been sent
router.route('/forgotPassword')
  .post(authEmployeeController.forgotPassword)

// Request: PUT auth/employee/updatePassword
// Process: check the credentials and update password in database
// Response: Message that the password has been updated
router.route('/updatePassword')
  .put(authorize, authEmployeeController.updatePassword)

//  TODO: Delete this route. Only for testing
router.post('/test', (req, res) => {
  res.send(req.cookies)
})



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