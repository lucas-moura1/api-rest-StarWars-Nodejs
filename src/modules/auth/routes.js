const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/auth', controller.authentication)

module.exports = router
