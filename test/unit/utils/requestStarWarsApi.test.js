const axios = require('axios').default
const getCountFilms = require('../../../src/utils/requestStarWarsApi')

jest.mock('axios')

describe('Test Request Star Wars Utils', () => {
    test('Test get count films with success', async () => {
        const planetName = 'Tatooine'
        const responseSWAPI = {
            data: {
                results: [
                    {
                        name: 'Tatooine',
                        films: ['I', 'IV']
                    }
                ]
            }
        }

        axios.get.mockResolvedValue(responseSWAPI)

        const response = await getCountFilms(planetName)

        expect(axios.get).toHaveBeenCalled()
        expect(response).toBe(2)
    })

    test('Test get count films with error in planet name', async () => {
        const planetName = 'Alderaan'
        const responseSWAPI = {
            data: {
                results: [
                    {
                        name: 'Tatooine',
                        films: ['I', 'IV']
                    }
                ]
            }
        }

        axios.get.mockResolvedValue(responseSWAPI)

        expect(getCountFilms(planetName)).rejects.toThrow()
        expect(axios.get).toHaveBeenCalled()
    })
})
