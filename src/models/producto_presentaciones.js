const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Producto_Presentaciones = sequelize.define('producto_presentaciones', {
  id_presentacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  precio_compra: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  porcentaje_aumento: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  }
})

module.exports = Producto_Presentaciones