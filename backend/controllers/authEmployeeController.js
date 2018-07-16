// import User model for use in controller functions
// const User = require('../models/User')
require('dotenv').config()
const { Employee } = require('../models/Employee')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const cookie = require('cookie');

// Function to validate the incoming user details. Joi library used to do the validation
const validateUser = (user) => {
  const schema = {
    email: Joi.string().required().email().min(2).max(255),
    password: Joi.string().required().min(8).max(1024)
  }
  const result = Joi.validate(user, schema)
  return result
}

// POST auth/employee/login
const login = async (req, res) => {
  // 1. Valitade the incoming request
  const { error, value } = validateUser(req.body)

  // 2. If not valid, return 400 (bad request)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // 3. If valid, check for the email in the database. The User model used here is imported from models/User
  let employee = await Employee.findOne({email: value.email})
  
  // 4. If not found, send back 400 (bad request)
  if (!employee) {
    return res.status(400).send('Invalid username or password')
  }

  // 5. If found, compare the given password with the password stored in the database
  const isValidPassword = await bcrypt.compare(value.password, employee.password)

  // 6. If not valid, send back 400 (bad request)
  if (!isValidPassword) {
    return res.status(400).send('Invalid username or password')
  }

  // 7. If valid, create a web token.
  const token = employee.generateAuthToken()
  
  // 8. Send back the token in the header and the user id in the body
  return res.header('x-auth-token', token).send({ _id: employee.id })

  // return res.header('Set-Cookie', cookie.serialize('_id', employee.id, { httpOnly: false }))
}



// export all controller functions required by router
module.exports = {
  login
}
