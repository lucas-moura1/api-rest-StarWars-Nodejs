const planetService = require('../../../src/services/planetService')
const planetController = require('../../../src/controllers/planetController')
const planetSchema = require('../../../src/validators/planetSchema')
const { verifyId } = require('../../../src/utils/supportFunctions')

jest.mock('../../../src/services/planetService')
jest.mock('../../../src/validators/planetSchema')
jest.mock('../../../src/utils/supportFunctions')

describe('Test planet Controller', () => {

    const requestMock = (planetObject = {}, planetId = '') => {
        return {
            body: {
                ...planetObject
            },
            params: {
                id: planetId
            }
        }
    }

    const responseMock = () => {
        const res = {}
        res.status = jest.fn().mockReturnValue(res)
        res.json = jest.fn().mockReturnValue(res)
        return res
    }

    test('Test create planet with success', async () => {
        const body = {}

        await planetSchema.validate.mockResolvedValue(body)

        const mockCreatePlanet = jest.fn()

        planetService.createPlanet = mockCreatePlanet

        mockCreatePlanet.mockResolvedValue({})

        const req = requestMock(body)
        const res = responseMock()

        await planetController.createPlanet(req, res)

        expect(planetSchema.validate).toHaveBeenCalled()
        expect(planetService.createPlanet).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    test('Test get all planets with success', async () => {
        const mockGetAllPlanets = jest.fn().mockResolvedValue([{}])

        planetService.getAllPlanets = mockGetAllPlanets

        const req = requestMock()
        const res = responseMock()

        await planetController.getAllPlanets(req, res)

        expect(planetService.getAllPlanets).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    test('Test get planet by id with success', async () => {
        const planetId = '123456789587458965412365'

        const mockGetById = jest.fn().mockResolvedValue({})

        planetService.getById = mockGetById

        verifyId.mockReturnValue(undefined)

        const req = requestMock({}, planetId)
        const res = responseMock()

        await planetController.getPanetById(req, res)

        expect(verifyId).toHaveBeenCalled()
        expect(planetService.getPlanetById).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    test('Test get planet by name with success', async () => {
        const planetName = 'Alderaan'

        const mockGetByName = jest.fn().mockResolvedValue({})

        planetService.getByName = mockGetByName

        const req = requestMock({}, planetName)
        const res = responseMock()

        await planetController.getPlanetByName(req, res)

        expect(planetService.getPlanetByName).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    test('Test update planet with success', async () => {
        const body = {}
        const planetId = '123456789587458965412365'

        await planetSchema.validate.mockResolvedValue(body)

        const mockUpdatePlanet = jest.fn()

        planetService.updatePlanet = mockUpdatePlanet

        mockUpdatePlanet.mockResolvedValue({})

        verifyId.mockReturnValue(undefined)

        const req = requestMock(body, planetId)
        const res = responseMock()

        await planetController.updatePlanetById(req, res)

        expect(planetSchema.validate).toHaveBeenCalled()
        expect(verifyId).toHaveBeenCalled()
        expect(planetService.updatePlanet).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })

    test('Test delete planet by id with success', async () => {
        const planetId = '123456789587458965412365'

        const mockdeleteById = jest.fn().mockResolvedValue([{}])

        planetService.deleteById = mockdeleteById

        const req = requestMock({}, planetId)
        const res = responseMock()

        await planetController.deletePlanetById(req, res)

        expect(planetService.deletePlanetById).toHaveBeenCalled()
        expect(res.json).toHaveBeenCalled()
    })
})
