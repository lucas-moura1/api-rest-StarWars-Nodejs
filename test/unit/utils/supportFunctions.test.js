const { verifyId } = require('../../../src/utils/supportFunctions')

describe.only('Test support function', () => {
    test('Test verifyId function with success', () => {
        const id = '123456789587458965412365'

        const result = verifyId(id)

        expect(result).toBeUndefined()
    })

    test('Test verifyId function with error', () => {
        const id = '1254856'

        expect(() => verifyId(id)).toThrow()
    })
})