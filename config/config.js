require('dotenv').config()

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALETC, DB_NAME_PROD, DB_NAME_DEV, DB_NAME_TEST }= process.env;

module.exports = {
development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME_DEV,
    host: DB_HOST,
    dialect: DB_DIALETC
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME_TEST,
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME_PROD,
    host: DB_HOST,
    dialect: "postgres"
  }
}
