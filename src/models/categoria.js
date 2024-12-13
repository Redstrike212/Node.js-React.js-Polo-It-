const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Categoria = sequelize.define('categoria', {
  id_categoria: {
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


module.exports = Categoria