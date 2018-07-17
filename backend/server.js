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

const app = new Express()
const PORT = process.env.SERVER_PORT || 3000

// DB Connection
const dbURL = `${process.env.MONGO_URL}:${process.env.MONGO_PORT}/chickenin`
console.log(`🛢  📘 MongoDB: ${dbURL}`) // Display the parsed URL in server logs

mongoose.connect(dbURL, { useNewUrlParser: true })
  .then(() => {
    console.log('🛢  ✅ Mongo Connection established.')
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

// Set base routes
app.use('/auth/employee', employeeAuthRouter)
app.use('/auth/manager', managerAuthRouter)
app.use('/api/contact/', contactRouter)
app.use('/api/shifts', shiftsRouter)
app.use('/api/employees/', employeesRouter)

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
    const decodedPayload = jwt.verify(token, 'Private Key') // TODO: Update provate key to something secret

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

app.listen(PORT, () => {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`🐔 ✅ ${currentTime}: express server listening on port ${PORT}`)
})
  .on('error', (error) => {
    console.log('💥 💥 Server Error:')
    console.log(error)
  })
