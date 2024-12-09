const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venta_detalle', {
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
        model: 'producto',
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
  }, {
    sequelize,
    tableName: 'venta_detalle',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "venta_detalle_pkey",
        unique: true,
        fields: [
          { name: "id_venta_detalle" },
        ]
      },
    ]
  });
};
