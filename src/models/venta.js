const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Venta = sequelize.define('venta', {
  id_venta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id_usuario'
    }
  },
  monto_total: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  id_venta_detalle: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'venta_detalles',
      key: 'id_venta_detalle'
    }
  }
})

module.exports = Venta