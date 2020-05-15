const environment = process.env.NODE_ENV || 'production'

const databaseName = {
  test: process.env.DB_MONGODB_NAME_TEST,
  development: process.env.DB_MONGODB_NAME_DEV
}[environment]

const databaseUrl = {
  test: `${process.env.DB_MONGODB_ENDPOINT}/${databaseName}`,
  development: `${process.env.DB_MONGODB_ENDPOINT}/${databaseName}`,
  production: `${process.env.MONGODB_URL}`
}[environment]

const databaseConfig = {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}

const userApp = process.env.USER_APP
const secretKey = process.env.SECRET_KEY

module.exports = {
  databaseUrl,
  databaseConfig,
  userApp,
  secretKey
}
