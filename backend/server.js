require('dotenv').config()
const Express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const auth = require('./middleware/authMiddleware')
const logger = require('./middleware/logger')

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
app.use(cors())
app.use(logger)

// Set path for serving static files and images
app.use(Express.static(path.join(__dirname, '../frontend/dist')))

// Import Routers
const employeeAuthRouter = require('./routes/employeeAuthRouter')
const contactRouter = require('./routes/contactRouter')
const shiftsRouter = require('./routes/shiftsRouter')

// Set base routes
app.use('/auth/employee', employeeAuthRouter)
app.use('/api/contact/', contactRouter)
app.use('/api/shifts/', shiftsRouter)

// Must be last route
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html'))
})

app.listen(PORT, () => {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`🐔 ✅ ${currentTime}: express server listening on port ${PORT}`)
})
  .on('error', (error) => {
    console.log('💥 💥 Server Error:')
    console.log(error)
  })
