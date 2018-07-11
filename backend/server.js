require('dotenv').config()
const Express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const auth = require('./middleware/authMiddleware')
const logger = require('./middleware/logger')

// TODO: DB Connection

// Import Router
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')


const app = new Express()
const PORT = process.env.SERVER_PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(logger)

// Set path for serving static files and images
app.use(Express.static(path.join(__dirname, '../frontend/dist')))

app.get('/auth', authRouter)

// Must be last route
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html'))
})

app.listen(PORT, () => {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`🐔 ${currentTime}: express server listening on port ${PORT}`)
})
  .on('error', (error) => {
    console.log('💥 Server Error:')
    console.log(error)
  })
