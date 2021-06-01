class RequestError extends Error {
    constructor (errors, statusCode) {
        super(errors || 'Error in request')
        this.statusCode = statusCode || 409
    }
}

module.exports = { RequestError }
