const express = require('express')
const router = express.Router()
const seasonController = require('../controllers/seasonWipe') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', seasonController.seasonWipe)

module.exports = router