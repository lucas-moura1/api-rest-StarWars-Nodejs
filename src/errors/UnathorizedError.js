class UnauthorizedError extends Error {

  constructor (errors) {
    super(errors || 'Unauthorized')
    this.statusCode = 403
  }
}

module.exports = UnauthorizedError
