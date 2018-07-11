require('dotenv').config()
const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const auth = require('./auth/authMiddleware')
const logger = require('./middleware/logger')

// DONE: import routers 
const authRouter = require('./auth/authRouter')
const userRouter = require('./routes/userRouter')

const app = new Express()
const PORT = process.env.SERVER_PORT

// DONE: app.use Middleware(bodyparser, cors)
app.use(bodyParser.json())
app.use(cors())
app.use(logger)

// TODO: Create routes
app.use('/api/auth', authRouter)

// TODO: Run server
app.listen(PORT, () => {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`${currentTime}: express server listening on port ${PORT}! 🐔`)
})
  .on('error', (error) => {
    console.log('Your ties undone!')
    console.log(error)
  })
