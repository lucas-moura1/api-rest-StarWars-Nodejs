const UnauthenticatedError = require('../errors/UnauthenticatedError')
const { secretKey, userApp } = require('../config/index')
const jwt = require('jsonwebtoken')
const isBase64 = require('is-base64')

const jsonToken = {
  user: userApp.split(':')[0],
  exp: Math.floor(Date.now() / 1000) + 60 * 5
}

const validateBase64 = userEncoded => {
  if (!isBase64(userEncoded)) throw new UnauthenticatedError()
}

const verifyUser = userEncoded => {
  validateBase64(userEncoded)
  const userBuffer = Buffer.from(userEncoded, 'base64')
  const user = userBuffer.toString('utf8')

  if (user !== userApp) throw new UnauthenticatedError()
}

const generateToken = (userEncoded) => {
  verifyUser(userEncoded)

  const token = jwt.sign(
    jsonToken,
    secretKey)

  return {
    accessToken: token
  }
}

module.exports = generateToken
