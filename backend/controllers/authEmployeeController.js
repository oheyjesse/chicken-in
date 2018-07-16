// import User model for use in controller functions
// const User = require('../models/User')
require('dotenv').config()
const { Employee } = require('../models/Employee')
const Joi = require('joi')
const bcrypt = require('bcrypt')

// Function to validate the incoming user details. Joi library used to do the validation
const validateUser = (user) => {
  const schema = {
    email: Joi.string().required().email().min(2).max(255),
    password: Joi.string().required().min(8).max(1024)
  }
  const result = Joi.validate(user, schema)
  return result
}

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

  // 7. If valid, create a web token. The function generateAuthToken() is a user instance method that is is defined in models/Users. This is an alternative way of generating the token (instead of doing 'const token = jwt.sign({ _id: this._id}, 'Private Key')' in this module). The benefit is that if we want to change the toekn payload in the future, we would only have to change it in one place.
  const token = employee.generateAuthToken()
  
  // 8. Send back the token in the header and the user id in the body
  return res.header('x-auth-token', token).send({ _id: employee.id })
}

// another example function, to "get all users from a Users model"
// function getAllUsers (req, res) {
//   User.find()
//     .then(users => {
//       res.status(200).json(users)
//       console.log('exampleGetUsers successful, all users returned')
//     })
//     .catch(err => {
//       res.status(500).json({error: err.message})
//     })
// }

// export all controller functions required by router
module.exports = {
  login
}
