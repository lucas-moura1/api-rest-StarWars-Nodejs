const planetSchema = require('../../../src/validators/planetSchema')

describe('Test validate User Schema', () => {
    test('Test validation with success ', async () => {
        const body = {
            name: 'Teste',
            weather: 'arid',
            ground: 'desert'
        }

        const responseValidateSchema = await planetSchema.validate(body)

        await expect(responseValidateSchema).toHaveProperty(['name'])
        await expect(responseValidateSchema).toHaveProperty(['weather'])
        await expect(responseValidateSchema).toHaveProperty(['ground'])
    })

    test('Test validation with error on format without ground field', async () => {
        const body = {
            name: 'Teste',
            weather: 'teste1234'
        }

        await expect(planetSchema.validate(body)).rejects.toThrow('ground')
    })

    test('Test validation with error on format without weather field', async () => {
        const body = {
            name: 'Teste',
            ground: 'teste@teste.com'
        }

        await expect(planetSchema.validate(body)).rejects.toThrow('weather')
    })
})