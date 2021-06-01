const {
    URL_SWAPI,
    PORT,
    NODE_ENV,
    LOGGER_LEVEL
} = process.env

const environment = process.env.NODE_ENV || 'production'

const IS_TEST = NODE_ENV === 'test'

const databaseName = {
    test: process.env.DB_MONGODB_NAME_TEST,
    development: process.env.DB_MONGODB_NAME_DEV
}[environment]

const databaseUrl = {
    test: `${process.env.DB_MONGODB_ENDPOINT}/${databaseName}`,
    development: `${process.env.DB_MONGODB_ENDPOINT}/${databaseName}`
}[environment]

const databaseConfig = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

module.exports = {
    URL_SWAPI,
    PORT,
    IS_TEST,
    LOGGER_LEVEL,
    databaseUrl,
    databaseConfig
}
