const generateToken = require('../../auth/authentication')
const UnauthenticatedError = require('../../errors/UnauthenticatedError')

module.exports = {
  authentication (req, res) {
    try {
      const userEncoded = req.body.user

      const token = generateToken(userEncoded)
      res.status(200)
      res.json(token)
    } catch (err) {
      console.error(err)
      throw new UnauthenticatedError(err)
    }
  }
}
