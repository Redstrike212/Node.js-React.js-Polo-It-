const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Producto = sequelize.define('producto', {
  id_producto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categoria',
      key: 'id_categoria'
    }
  },
  id_mascota: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'mascota',
      key: 'id_mascota'
    }
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})

module.exports = Producto