const jwt = require('jsonwebtoken')
require('dotenv').config()

function authorize (req, res, next) {
  if (process.env.NODE_ENV === 'development') { // TODO: Get rid of this - maybe?
    return next()
  }

  // 1. Get the token from the request cookie. The token is stored under xAuthToken in this case becuase that's the name we've given it
  const token = req.cookies.xAuthToken

  // 2. If the token doesn't exist, return 401 (unauthorized)
  if (!token) {
    return res.status(401).send('Access denied. No token provided')
  }

  try {
    // 3. If the token exists, verify the token. The private key used to verify the token has to be the same as the private key used to create the token. In this case, the private key is 'Private Key' becase that's what we used to create the token.The private key should be stored in an environment variable, not hard-coded like below. jwt.verify returns the decoded payload if the key is valid, and throwns an error if the key is not valid (which is why we need to wrap this inside try-catch block)
    const decodedPayload = jwt.verify(token, process.env.JWT_KEY)

    // 4. Add the decoded payload to req.user. In this case, the paylaod contains the user Id (becase that's what we put in the payload in the model/User module). By adding it to req.user, we have access to req.user._id outside of this function.
    req.user = decodedPayload

    // 5. End this middleware function and go to the next funtion (which will be the route handler)
    next()
  } catch (error) {
    // 6. If error (token not valid) send back 400 (bad request)
    return res.status(400).send('Invalid token')
  }
}

module.exports = {
  authorize
}
