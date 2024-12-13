const { DataTypes } = require('sequelize');
const sequelize = require("../db/database")

const Producto_Mascota = sequelize.define('producto_mascota', {
  id_mascota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'mascota',
      key: 'id_mascota'
    }
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'productos',
      key: 'id_producto'
    }
  }
})


module.exports = Producto_Mascota