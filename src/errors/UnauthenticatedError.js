class UnauthenticatedError extends Error {

  constructor (errors) {
    super(errors || 'Unauthenticated')
    this.statusCode = 401
  }
}

module.exports = UnauthenticatedError
