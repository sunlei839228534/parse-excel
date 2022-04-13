const Sequelize = require('sequelize')
const { dbName, user, password, host, port } = require('./config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: false,
  timezone: '+08:00',
  define: {

  }
})

module.exports = {
  sequelize
}