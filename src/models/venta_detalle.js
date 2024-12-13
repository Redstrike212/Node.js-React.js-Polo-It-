const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Venta_Detalle = sequelize.define('venta_detalle', {
  id_venta_detalle: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_venta: {
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
  },
  precio_unitario: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sub_total: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
})
module.exports = Venta_Detalle