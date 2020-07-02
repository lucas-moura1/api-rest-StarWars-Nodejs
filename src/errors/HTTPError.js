class HTTPError extends Error {
  constructor (errors) {
    super(errors || 'Error in requisition')
    this.statusCode = 409
  }
}

module.exports = HTTPError
