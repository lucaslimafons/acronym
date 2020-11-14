require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    timezone: process.env.TZ,
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'acronym_test',
    host: process.env.DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    timezone: process.env.TZ,
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    timezone: process.env.TZ,
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  }
}
