const {Bearer} = require('permit')
const permit = new Bearer()
const jwt = require('jsonwebtoken')

function tokenHandler (req, res, next) {
  console.log('handler started')
  const token = permit.check(req)
  console.log(token)

  const JWT_SECRET = process.env.JWT_SECRET
  console.log(JWT_SECRET)

  const decoded = jwt.verify(token, JWT_SECRET)
  console.log(decoded)
  // will check token from req

  // TODO: use 'permit' to check token is valid √

  // TODO: set up a failure if there is no token √

  // TODO: else, if token is found, continue with logic (next)

  // TODO: (extra - check email inside token matches a valid user
  // (re-checking)

  // if(!token) {
  //     console.log('token not valid')
  //     permit.fail(res)
  //     throw new Error('Authentication required')
  // }

  next()
}

module.exports = {
  tokenHandler
}
