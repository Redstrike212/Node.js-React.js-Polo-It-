const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Mascota = sequelize.define('mascota', {
  id_mascota: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
});

module.exports = Mascota
