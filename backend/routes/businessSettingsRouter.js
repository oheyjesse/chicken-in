const express = require('express')
const router = express.Router()
const businessSettingsController = require('../controllers/businessSettingsController')

// ALL Employee Route
// GET /settings/business/
// PUT /settings/business/
router.route('/')
  .get(businessSettingsController.getSettings) // route > // GET settings/business/ | manager/settings

router.route('/')
  .put(businessSettingsController.updateSettings) // route > // PUT settings/business/ | manager/settings