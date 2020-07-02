const axios = require('axios').default
const { swapi } = require('../config')
const HTTPError = require('../errors/HTTPError')
const { count } = require('../modules/planet/model')

const getAllPlanets = async () => {
  const response = await axios.get(swapi).then(res => {
    return res
  })
    .catch(err => {
      throw new HTTPError(err.mensage)
    })

  return response
}

async function getCountFilms (planetName) {
  const respondeApi = await getAllPlanets()

  const planetData = respondeApi.data.results.find(planet => planet.name === planetName)
  console.log('planetData', planetData)

  if (planetData) return planetData.films.length
  else throw new HTTPError('There is not planet with this name')
}

module.exports = getCountFilms
