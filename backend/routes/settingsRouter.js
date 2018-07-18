const express = require('express')
const router = express.Router()

const settingsController = require('../controllers/settingsController')
const { authorize } = require('../middleware/authorize')
const { authEmployee } = require('../middleware/authEmployee')
const { authManager } = require('../middleware/authManager')

router.route('/business')
  .post(settingsController.getSettingsBusiness) // TODO: Add authorize and authEmployee middleware functions
  .put(settingsController.updateSettingsBusiness) // TODO: Add authorize and authEmployee middleware functions

module.exports = router
