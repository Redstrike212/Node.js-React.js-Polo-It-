const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const usuario = sequelize.define('usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: "usuario_correo_key"
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  id_rol: {
    type: DataTypes.INTEGER,
    references: {
      model: 'rols',
      key: 'id_rol'
    },
    defaultValue: 2,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})


module.exports = usuario