const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto_presentaciones', {
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
        model: 'producto',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'producto_presentaciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "producto_presentaciones_pkey",
        unique: true,
        fields: [
          { name: "id_presentacion" },
        ]
      },
    ]
  });
};
