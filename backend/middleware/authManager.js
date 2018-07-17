function authManager (req, res, next) {
  // I'm putting everything inside a try-catch block because I'm paranoid
  try {
    // 1. Get the user type from the jwt payload
    const userType = req.user.userType

    // 2. If manager type is not manager, send back 403 (unauthorized)
    if (userType !== 'manager') {
      return res.status(403).send('Access Denied')
    }

    // 3. If type is manager, go to next function
    next()
  } catch (error) {
    res.status(500).send('Something went wrong')
  }
}

module.exports = {
  authManager
}
