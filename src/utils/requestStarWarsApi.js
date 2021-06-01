const axios = require('axios').default
const { URL_SWAPI } = require('../config')
const { RequestError } = require('../errors/requestError')
const logger = require('../config/logger')

const getAllPlanets = async () => {
    logger.info('[PLANET UTILS] Making request to SWAPI')

    try {
        const response = await axios.get(URL_SWAPI)

        logger.info('[PLANET UTILS] Getting response with success')

        return response

    } catch (err) {
        logger.info(`[PLANET UTILS] Error to request SWAPI -> ${err}`)

        throw new RequestError(err.mensage)
    }
}

async function getCountFilms (planetName) {
    logger.info('[PLANET UTILS] Initializing request to SWAPI')

    try {
        const respondeApi = await getAllPlanets()

        const planetData = respondeApi.data.results.find(planet => planet.name === planetName)

        logger.info(`[PLANET UTILS] Verify if find planet with name: ${planetName}`)

        if (planetData) return planetData.films.length
        else throw new RequestError('There is not planet with this name')

    } catch (err) {
        logger.info(`[PLANET UTILS] Error to get count of filmes -> ${err}`)

        throw err
    }
}

module.exports = getCountFilms
