const planetService = require('../services/planetService')
const planetSchema = require('../validators/planetSchema')
const logger = require('../config/logger')
const { verifyId } = require('../utils/supportFunctions')

module.exports = {
    async createPlanet (req, res) {
        const body = req.body

        logger.info(`[PLANET CONTROLLER] Initializing save new planet -> ${body}`)

        try {
            await planetSchema.validate(body)

            const reponse = await planetService.createPlanet(body)

            res.json(reponse)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            const message = err.message || err.errors.toString()

            res
                .status(err.statusCode || 409)
                .json({ error: message })
        }
    },

    async getAllPlanets (req, res) {
        logger.info('[PLANET Controller] Initializing get all planets')

        try {
            const response = await planetService.getAllPlanets()

            res.json(response)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            res.status(409).json({ error: err.message })
        }
    },

    async getPanetById (req, res) {
        logger.info('[PLANET Controller] Initializing get planet by id')

        const planetId = req.params.id

        try {
            verifyId(planetId)

            const response = await planetService.getPlanetById(planetId)

            res.json(response)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            res.status(409).json({ error: err.message })
        }
    },

    async getPlanetByName (req, res) {
        logger.info('[PLANET Controller] Initializing get planet by name')

        const planetName = req.params.name

        try {
            const response = await planetService.getPlanetByName(planetName)

            res.json(response)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            res.status(409).json({ error: err.message })
        }
    },

    async updatePlanetById (req, res) {
        logger.info('[PLANET Controller] Initializing update planet with id')
        try {
            const planetId = req.params.id
            const body = req.body

            verifyId(planetId)

            await planetSchema.validate(body)

            const response = await planetService.updatePlanet(body, planetId)

            res.json(response)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            const message = err.message || err.errors.toString()

            res
                .status(err.statusCode || 409)
                .json({ error: message })
        }
    },

    async deletePlanetById (req, res) {
        logger.info('[PLANET Controller] Initializing delete planet by id')
        const planetId = req.params.id

        try {
            verifyId(planetId)

            const response = await planetService.deletePlanetById(planetId)

            res.json(response)

        } catch (err) {
            logger.info(`[PLANET CONTROLLER] Error >> ${JSON.stringify(err)}`)

            res.status(409).json({ error: err.message })
        }
    }
}
