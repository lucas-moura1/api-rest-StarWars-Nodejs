const planetRepository = require('../../../src/repository/planetRepository')
const planetService = require('../../../src/services/planetService')
const getCountFilms = require('../../../src/utils/requestStarWarsApi')

jest.mock('../../../src/repository/planetRepository')
jest.mock('../../../src/utils/requestStarWarsApi')

describe('Test planet Service', () => {

    test('Test create planet', async () => {
        const planet = {}

        const mockCreate = jest.fn()

        planetRepository.create = mockCreate

        mockCreate.mockResolvedValue({})

        getCountFilms.mockReturnValue(2)

        await planetService.createPlanet(planet)

        expect(planetRepository.create).toHaveBeenCalled()
        expect(getCountFilms).toHaveBeenCalled()
    })

    test('Test get all planets', async () => {
        const mockGetAll = jest.fn().mockResolvedValue([{}])

        planetRepository.getAll = mockGetAll

        await planetService.getAllPlanets()

        expect(planetRepository.getAll).toHaveBeenCalled()
    })

    test('Test get planet by id', async () => {
        const planetId = '123456789587458965412365'

        const mockGetById = jest.fn().mockResolvedValue({})

        planetRepository.getById = mockGetById

        await planetService.getPlanetById(planetId)

        expect(planetRepository.getById).toHaveBeenCalled()
    })

    test('Test get planet by name', async () => {
        const planetName = 'Alderaan'

        const mockGetByName = jest.fn().mockResolvedValue({})

        planetRepository.getByName = mockGetByName

        await planetService.getPlanetByName(planetName)

        expect(planetRepository.getByName).toHaveBeenCalled()
    })

    test('Test update planet', async () => {
        const planet = {}
        const planetId = '123456789587458965412365'

        const mockUpdate = jest.fn()

        planetRepository.update = mockUpdate

        mockUpdate.mockResolvedValue({})

        getCountFilms.mockReturnValue(2)

        await planetService.updatePlanet(planet, planetId)

        expect(planetRepository.update).toHaveBeenCalled()
        expect(getCountFilms).toHaveBeenCalled()
    })

    test('Test delete planet by id', async () => {
        const planetId = '123456789587458965412365'

        const mockdeleteById = jest.fn().mockResolvedValue([{}])

        planetRepository.deleteById = mockdeleteById

        await planetService.deletePlanetById(planetId)

        expect(planetRepository.deleteById).toHaveBeenCalled()
    })
})
