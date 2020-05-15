const authorization = require('../auth/authorization')
const UnathorizedError = require('../errors/UnathorizedError')

const auth = (req, resp, next) => {
  const token = req.headers.authorization

  if (!authorization(token)) throw new UnathorizedError()

  next()
}
module.exports = auth
