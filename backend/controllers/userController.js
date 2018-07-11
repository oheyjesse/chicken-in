// import User model for use in controller functions
const User = require('../models/User')

// example controller function
function exampleGetUsers (req, res) {
  User.find()
    .then(users => {
      res.status(200).json(users)
      console.log('exampleGetUsers successful, all users returned')
    })
    .catch(err => {
      res.status(500).json({error: err.message})
    })
}

// another example controller function
function examplePostUser (req, res) {
  // TODO: Logic goes here
}

// TODO: Add more controller functions

// export all controller functions required by router
module.exports = {
  exampleGetUsers,
  examplePostUser
}
