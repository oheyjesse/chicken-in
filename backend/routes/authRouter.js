require('dotenv').config()
const express = require('express')
const router = express.Router()
// const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  res.send('Login Route Works :D')
})

// TODO: route Login - Checks credentials, provides cookie
// TODO: route Logout - Removes cookie (perhaps sends blank cookie?) - re-route to '*' 
// TODO: route Registration - Create user, hash password and store, MVP log them in, and re-route to '*'

module.exports = router
