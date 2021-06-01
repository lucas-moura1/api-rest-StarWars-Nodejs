const logger = require('../config/logger')
const { v4: uuidV4 } = require('uuid')

const loggerMiddleware = (req, res, next) => {
    logger.requestId = uuidV4()
    logger.method = req.method

    next()
}

module.exports = loggerMiddleware
