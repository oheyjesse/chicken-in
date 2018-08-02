require('dotenv').config()
const Express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const auth = require('./middleware/authMiddleware')
const logger = require('./middleware/logger')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
// const { runSeeder } = require('./seed/dataSeeder')
const { updateShifts, createShifts } = require('./seed/timedSeeder')

const app = new Express()
let PORT = process.env.SERVER_PORT || 3000
let dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`

// Use Test DB if Tests are being run
if (process.env.NODE_ENV === 'test') {
  console.log('🐔 👨‍🔬 NODE_ENV: \'test\'')
  dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin-test`
  PORT = 1337
} else if (process.env.NODE_ENV === 'development') {
  console.log('🐔 👷‍♂️ NODE_ENV: \'development\' - Auth Disabled')
} else if (process.env.NODE_ENV === 'production') {
  console.log('🐔 ☢️ NODE_ENV: \'production\'')
}

console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

// DB Connection
mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(() => {
    console.log('🛢  ✅ Mongo Connection established.')
    console.log('Node Environment:', process.env.NODE_ENV)
    // runSeeder() // Seed data
    updateShifts() // Manager update existing shifts every week
    createShifts() // Employees create new shifts every day
  })
  .then(() => {
    app.emit('started') // Tell our tests they're ready to go
  })
  .catch(error => {
    console.error('💥 ❌ MONGO_CONNECT_ERROR: Have you started your mongodb?')
    console.log(`Error Details: ${error}`)
    process.exit() // Quits Server on Error
  })

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(logger)

// Set path for serving static files and images
app.use(Express.static(path.join(__dirname, '../frontend/dist')))

// Import Routers
const employeeAuthRouter = require('./routes/employeeAuthRouter')
const managerAuthRouter = require('./routes/managerAuthRouter')
const contactRouter = require('./routes/contactRouter')
const shiftsRouter = require('./routes/shiftsRouter')
const employeesRouter = require('./routes/employeesRouter')
const settingsRouter = require('./routes/settingsRouter')

// Set base routes
app.use('/auth/employee', employeeAuthRouter)
app.use('/auth/manager', managerAuthRouter)
app.use('/api/contact/', contactRouter)
app.use('/api/shifts', shiftsRouter)
app.use('/api/employees/', employeesRouter)
app.use('/api/settings/', settingsRouter)

// Setup the most basic test route
app.use('/test/', function (req, res) {
  res.status(200).json({ data: 'test' })
})

// Must be last route
app.get('*', function (req, res) {
  // 1. Check if a token exists
  const token = req.cookies.xAuthToken

  // 2. If the token doesn't exist send the guest app
  if (!token) {
    return res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html'))
  }

  try {
    // 3. If the token exists, decode the jwt
    const decodedPayload = jwt.verify(token, process.env.JWT_KEY)
    // 4. Get the user type from the decoded payload
    const userType = decodedPayload.userType

    // 5. If user type is employee, send the employee app
    if (userType === 'employee') {
      return res.sendFile(path.join(__dirname, '../frontend/dist/employeeApp/index.html'))
    }

    // 5. If user type is manager, send the manager app
    if (userType === 'manager') {
      return res.sendFile(path.join(__dirname, '../frontend/dist/managerApp/index.html'))
    }

    // If neither, send the guest app
    return res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html'))
  } catch (error) {
    // If anything errors, send the guest app
    return res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html')).send({ message: 'Something went wrong' })
  }
})

// Server stored to a variable to export for testing routes
const server = app.listen(PORT, () => {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`🐔  ✅ ${currentTime}: express server listening on port ${PORT}`)
})
  .on('error', (error) => {
    console.log('💥 💥 Server Error:')
    console.log(error)
  })

module.exports = {
  app: app,
  server: server // for testing
}
