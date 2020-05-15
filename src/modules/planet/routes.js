const express = require('express')
const router = express.Router()
const controller = require('./controller')
const auth = require('../../middleware/auth')

router.get('/planets', auth, controller.list)
router.get('/planet/name/:nome', auth, controller.findPlanetByName)
router.get('/planet/id/:id', auth, controller.findPanetById)
router.post('/planet/create', auth, controller.create)
router.patch('/planet/id/:nome', auth, controller.updateById)
router.delete('/planet/id/:id', auth, controller.delete)

module.exports = router
