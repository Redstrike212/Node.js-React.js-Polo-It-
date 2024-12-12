const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Rol = sequelize.define('rol', {
  id_rol: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})


module.exports = Rol