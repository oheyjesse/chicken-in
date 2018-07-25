require('dotenv').config()
const { Employee } = require('../models/Employee')
const bcrypt = require('bcryptjs')
const path = require('path')

// POST auth/employee/login
const login = async (req, res) => {
  // 1. Check for the email in the database
  let employee = await Employee.findOne({email: req.body.email})

  // 2. If not found or not active, send back 400 (bad request)
  if (!employee || !employee.active) {
    return res.status(400).send('Invalid username or password')
  }

  // 3. If found, compare the given password with the password stored in the database
  const isValidPassword = await bcrypt.compare(req.body.password, employee.password)

  // 4. If not valid, send back 400 (bad request)
  if (!isValidPassword) {
    return res.status(400).send('Invalid username or password')
  }

  // 5. If valid, create a web token.
  const token = employee.generateAuthToken(employee.business, employee.email) // TODO: If something breaks, this might be the spot

  // 6. Send back the token in the header and the user id in the body
  // return res.header('xAuthToken', token).send({ _id: employee.id })
  return res.cookie('xAuthToken', token, { httpOnly: true }).send('Hello')
  // return res.header('Set-Cookie', cookie.serialize('_id', employee.id, { httpOnly: false }))
}

// Function to logout
const logout = (req, res) => {
  res.clearCookie('xAuthToken').send({ message: 'Logged Out Successfully' })
}

// Function to restore password
const forgotPassword = (req, res) => {
  res.send('TODO: Create functionality for reseting password')
}

// Function to update password
const updatePassword = async (req, res) => {
  try {
    console.log(req.body)

    // let employee = await Employee.findOne({ 'fullName': 'Steven Salad' }) test employee login
    // 1. Find the employee in the database
    let employee = null

    if (process.env.NODE_ENV === 'development') {
      employee = await Employee.findById('5b53377c46556409ebbad3c0') // TODO: Delete? This is only to allow for development
    } else {
      employee = await Employee.findById(req.user._id)
    }

    // 2. Compare oldPassword (provided) with the existing password in the database
    const isValidPassword = await bcrypt.compare(req.body.oldPassword, employee.password)

    // 3. If not the same, return 400 (unauthorized)
    if (!isValidPassword) {
      return res.status(400).send('Incorrect password provided')
    }

    if (req.user.isDemo) { // TODO: If the user is a demo, return a success response without updating the database
      return res.send({message: 'Password updated'})
    }

    // 4. If the same, generate the salt
    const salt = await bcrypt.genSalt(10)

    // 5. Create the hashed password
    const password = await bcrypt.hash(req.body.newPassword, salt)

    // 6. Update the password in the database
    employee.set({ // 2. Update the movie
      password: password
    })
    const result = await employee.save()

    // 7. Send back a message
    return res.send({message: 'Password updated'})
  } catch (error) {
    res.status(500).send('Something went wrong.')
  }
}

// export all controller functions required by router
module.exports = {
  login,
  logout,
  forgotPassword,
  updatePassword
}
