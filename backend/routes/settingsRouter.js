const express = require('express')
const router = express.Router()

const settingsController = require('../controllers/settingsController')
const { authorize } = require('../middleware/authorize')
const { authManager } = require('../middleware/authManager')

router.route('/business')
  .get(authorize, authManager, settingsController.getSettingsBusiness)
  .put(authorize, authManager, settingsController.updateSettingsBusiness)
module.exports = router
