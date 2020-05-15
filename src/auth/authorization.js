const jwt = require('jsonwebtoken')
const { secretKey, userApp } = require('../config/index')
const UnathorizedError = require('../errors/UnathorizedError')

const isBearer = token => {
  if (!token) throw new UnathorizedError()

  const splitToken = token.split(' ')

  if (splitToken[0] !== 'Bearer') throw new UnathorizedError()

  return splitToken
}

const verifyUser = user => {
  if (user !== userApp.split(':')[0]) return false

  return true
}

const verifyError = (message) => {
  if (message === 'jwt expired') throw new UnathorizedError('Token expired')

  return new UnathorizedError()
}

const authorization = (token) => {
  const tokenArray = isBearer(token)

  try {
    const payload = jwt.verify(
      tokenArray[1],
      secretKey)

    return verifyUser(payload.user)
  } catch (error) {
    console.error(error)
    verifyError(error.message)
  }
}

module.exports = authorization
