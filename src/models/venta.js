const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('venta', {
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
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
        model: 'venta_detalle',
        key: 'id_venta_detalle'
      }
    }
  }, {
    sequelize,
    tableName: 'venta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "venta_pkey",
        unique: true,
        fields: [
          { name: "id_venta" },
        ]
      },
    ]
  });
};
