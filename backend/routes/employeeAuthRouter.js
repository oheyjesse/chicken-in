require('dotenv').config()
const express = require('express')
const router = express.Router()
const authEmployeeController = require('../controllers/authEmployeeController')
const { authorize } = require('../middleware/authorize')
const { authEmployee } = require('../middleware/authEmployee')

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
  .post(authorize, authEmployee, authEmployeeController.forgotPassword)

// Request: PUT auth/employee/updatePassword
// Process: check the credentials and update password in database
// Response: Message that the password has been updated
router.route('/updatePassword')
  .put(authorize, authEmployee, authEmployeeController.updatePassword)

//  TODO: Delete this route. Only for testing
router.post('/test', authorize, (req, res) => {
  res.send(req.user)
})

module.exports = router
