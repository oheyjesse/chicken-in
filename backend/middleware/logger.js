function logger (req, res, next) {
  let currentTime = new Date(Date.now()).toLocaleTimeString()
  console.log(`🐔 ${currentTime}: ${req.method} ${req.url}`)
  next()
}
module.exports = logger
