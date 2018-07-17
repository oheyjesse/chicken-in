function authEmployee (req, res, next) {
  // I'm putting everything inside a try-catch block because I'm paranoid
  try {
    // 1. Get the user type from the jwt payload
    const userType = req.user.userType

    // 2. If employee type is not employee, send back 403 (unauthorized)
    if (userType !== 'employee') {
      return res.status(403).send('Access Denied')
    }

    // 3. If type is employee, go to next function
    next()
  } catch (error) {
    res.status(500).send('Something went wrong')
  } 
}

module.exports = {
  authEmployee
}
