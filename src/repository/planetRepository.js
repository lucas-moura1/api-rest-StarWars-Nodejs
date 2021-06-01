const Planet = require('../models/planetModel')
const logger = require('../config/logger')
const { RequestError } = require('../errors/requestError')

module.exports = {
    async create (planetDatas) {
        logger.info('[PLANET REPOSITORY] Creating planet in database')

        try {
            const planet = new Planet(planetDatas)

            const response = await planet.save()

            logger.info(`[PLANET REPOSITORY] Created planet with id: ${planet._id}`)

            return response

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in criation of planet ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    },

    async getAll () {
        try {
            logger.info('[PLANET REPOSITORY] Getting all planets')

            const planets = await Planet.find().lean().exec()

            return planets

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in getting all planets >> ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    },

    async getById (planetId) {
        try {
            logger.info(`[PLANET REPOSITORY] Getting planet by id: ${planetId}`)

            const planet = await Planet.findById(planetId).lean().exec()

            return planet

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in getting planet by id >> ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    },

    async getByName (name) {
        try {
            logger.info(`[PLANET REPOSITORY] Getting planet by name: ${name}`)

            const planet = await Planet.findOne({ name }).lean().exec()

            return planet

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in getting planet by name >> ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    },

    async update (newPlanetDatas, planetId) {
        try {
            logger.info('[PLANET REPOSITORY] Updating planet in database')

            const planet = await Planet.findById(planetId).exec()

            planet.name = newPlanetDatas.name
            planet.weather = newPlanetDatas.weather
            planet.ground = newPlanetDatas.ground
            planet.numberOfFilms = newPlanetDatas.numberOfFilms

            const response = await planet.save()

            logger.info(`[PLANET REPOSITORY] Planet updated with id: ${planet._id}`)

            return response

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in updating planet >> ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    },

    async deleteById (planetId) {
        try {
            logger.info(`[PLANET REPOSITORY] Deleting planet by id: ${planetId}`)

            const query = { _id: planetId }

            const planet = await Planet.deleteOne(query).exec()

            return planet

        } catch (err) {
            logger.info(`[PLANET REPOSITORY] Error in delete planet by id >> ${JSON.stringify(err)}`)

            throw new RequestError()
        }
    }
}
