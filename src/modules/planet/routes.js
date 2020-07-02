const express = require('express')
const router = express.Router()
const controller = require('./controller')
const auth = require('../../middleware/auth')

router.get('/planets', auth, controller.list)
router.get('/planet/name/:name', auth, controller.findPlanetByName)
router.get('/planet/id/:id', auth, controller.findPanetById)
router.post('/planet/create', auth, controller.create)
router.patch('/planet/id/:id', auth, controller.updateById)
router.delete('/planet/name/:name', auth, controller.delete)

module.exports = router
