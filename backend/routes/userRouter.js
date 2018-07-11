// require express, and create a router
const express = require('express')
const router = express.Router()

// import the relevant controller here, so the router can point to it
const usersController = require('../controllers/userController')

// define the routes on the router:
// ie 'get', points to the "getAllusers" function 
// in the usersController
router.route('/users')
  .get(usersController.getAllUsers) // get all users
  .post(usersController.postUser) // post a user

router.route('/users/:id')
  .get(usersController.getUser) // get a single user
  .delete(usersController.deleteUser) // delete a user

module.exports = router
