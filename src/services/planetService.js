const planetRepository = require('../repository/planetRepository')
const logger = require('../config/logger')
const getCountFilms = require('../utils/requestStarWarsApi')

module.exports = {
    async createPlanet (planetDatas) {
        logger.info('[PLANET SERVICE] Process to save new planet')

        try {
            const numberOfFilms = await getCountFilms(planetDatas.name)

            planetDatas.numberOfFilms = numberOfFilms

            const response = await planetRepository.create(planetDatas)

            return response

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    },

    async getAllPlanets () {
        logger.info('[PLANET SERVICE] Process to get all planets')

        try {
            const planets = await planetRepository.getAll()

            return planets

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    },

    async getPlanetById (planetId) {
        logger.info('[PLANET SERVICE] Process to get planet by Id')

        try {
            const planet = await planetRepository.getById(planetId)

            return planet

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    },

    async getPlanetByName (planetName) {
        logger.info('[PLANET SERVICE] Process to get planet by name')

        try {
            const planet = await planetRepository.getByName(planetName)

            return planet

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    },

    async updatePlanet (planetDatas, planetId) {
        logger.info('[PLANET SERVICE] Process to update planet')

        try {
            const numberOfFilms = await getCountFilms(planetDatas.name)

            planetDatas.numberOfFilms = numberOfFilms

            const response = await planetRepository.update(planetDatas, planetId)

            return response

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    },

    async deletePlanetById (planetId) {
        logger.info('[PLANET SERVICE] Process to delete planet by id')

        try {
            const planet = await planetRepository.deleteById(planetId)

            return planet

        } catch (err) {
            logger.info(`[PLANET SERVICE] Error >> ${JSON.stringify(err)}`)

            throw err
        }
    }
}
