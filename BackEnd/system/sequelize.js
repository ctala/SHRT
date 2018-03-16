const Sequelize = require('sequelize');
const sequelize = new Sequelize('Naito', 'root', 'secret', {
  dialect: 'mysql'
});
global.sequelize=sequelize
global.models={}
global.models=Object.assign(global.models,require('../models/run.js'))
module.exports = sequelize;
