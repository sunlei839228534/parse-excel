const { sequelize } = require('../db/db.js')

const { Sequelize, Model } = require('sequelize')

class Info extends Model {

}
Info.init({
  hospital:: Sequelize.STRING,
  wardArea: Sequelize.STRING,
  floor: Sequelize.STRING,
  bedCount: Sequelize.STRING,
  name: Sequelize.STRING,
  sex: Sequelize.STRING,
  age: Sequelize.INTERGER,
  personId: {
    type: Sequelize.STRING,
    unique: true,
    primaryKey: true
  },
  hospitalizedDate: Sequelize.DATE,
  phone: Sequelize.STRING,
  familyPhone: Sequelize.STRING,
  address: Sequelize.STRING,
  direction: Sequelize.STRING,
  townOrStreet: Sequelize.STRING,
  isLeaveHospital: Sequelize.BOOLEAN,
}, { sequelize })