const { RequestError } = require('../errors/requestError')

const verifyId = (id) => {
    if (id.length < 24) throw new RequestError("Insert correct planet's id")
}

module.exports = { verifyId }
