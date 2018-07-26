require('dotenv').config()
const { Manager } = require('../models/Manager')
const bcrypt = require('bcryptjs')

// POST auth/manager/login
const login = async (req, res) => {
  // 1. If valid, check for the email in the database
  let manager = await Manager.findOne({email: req.body.email})

  // 2. If not found, send back 400 (bad request)
  if (!manager) {
    return res.status(400).send('Invalid username or password')
  }

  // 3. If found, compare the given password with the password stored in the database
  const isValidPassword = await bcrypt.compare(req.body.password, manager.password)

  // 4. If not valid, send back 400 (bad request)
  if (!isValidPassword) {
    return res.status(400).send('Invalid username or password')
  }

  // 5. If valid, create a web token.
  const token = manager.generateAuthToken(manager.business, manager.email) // TODO: If something breaks, this might be the spot

  // 6. Send back the token in the header and the user id in the body
  // return res.header('xAuthToken', token).send({ _id: manager.id })
  return res.cookie('xAuthToken', token, { httpOnly: true }).send('Hello')
  // return res.header('Set-Cookie', cookie.serialize('_id', manager.id, { httpOnly: false }))
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
  // 1. Find the manager in the database
  let manager = null
  if (process.env.NODE_ENV === 'development') {
    manager = await Manager.findOne({ email: 'ed@redrocks.com' }) // TODO: Delete? This is only to allow for development
  } else {
    manager = await Manager.findById(req.user._id)
  }

  // 2. Compare oldPassword (provided) with the existing password in the database
  const isValidPassword = await bcrypt.compare(req.body.oldPassword, manager.password)

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
  manager.set({ // 2. Update the movie
    password: password
  })
  const result = await manager.save()

  // 7. Send back a message
  return res.send({message: 'Password updated'})
}

// export all controller functions required by router
module.exports = {
  login,
  logout,
  forgotPassword,
  updatePassword
}
