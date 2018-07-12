// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const contactController = require('../controllers/contactController')

// define the routes on the router:
// ie 'get', points to the "getAllcontact" function in the contactController
router.route('/')
  .post(contactController.sendEmail) // route > 'sendEmail' in 'contactController'

// router.route('/contact/:id') ## Example
// // .get(contactController.getContact) // get a single contact
// // .delete(contactController.deleteContact) // delete a contact

module.exports = router
