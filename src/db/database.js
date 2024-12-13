const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-commerce', 'postgres', 'Magn01sler', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;