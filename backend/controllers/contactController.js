// import User model for use in controller functions
// const User = require('../models/User')

function sendEmail (req, res) {
  res.status(200).json({"message":"hi"})
}

// another example function, to "get all users from a Users model"
// function getAllUsers (req, res) {
//   User.find()
//     .then(users => {
//       res.status(200).json(users)
//       console.log('exampleGetUsers successful, all users returned')
//     })
//     .catch(err => {
//       res.status(500).json({error: err.message})
//     })
// }

// export all controller functions required by router
module.exports = {
  sendEmail
}
