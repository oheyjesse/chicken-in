const express = require('express')
const router = express.Router()

const settingsController = require('../controllers/settingsController')
const { authorize } = require('../middleware/authorize')
const { authEmployee } = require('../middleware/authEmployee')
const { authManager } = require('../middleware/authManager')

router.route('/business')
  .get(settingsController.getSettingsBusiness) // TODO: Add authorize and authManager middleware functions
  .put(settingsController.updateSettingsBusiness) // TODO: Add authorize and authManager middleware functions

module.exports = router
