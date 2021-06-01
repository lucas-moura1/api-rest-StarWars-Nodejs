const express = require('express')
const planetController = require('../controllers/planetController')

const router = express.Router()

router.post('/planet/', planetController.createPlanet)
router.get('/planet', planetController.getAllPlanets)
router.get('/planet/name/:name', planetController.getPlanetByName)
router.get('/planet/:id', planetController.getPanetById)
router.put('/planet/:id', planetController.updatePlanetById)
router.delete('/planet/:id', planetController.deletePlanetById)

router.get('/', (req, res) => {
    res.json({ status: 'Up' })
})

module.exports = router
