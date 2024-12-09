const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto_mascota', {
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
        model: 'producto',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'producto_mascota',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "producto_mascota_pkey",
        unique: true,
        fields: [
          { name: "id_mascota" },
          { name: "id_producto" },
        ]
      },
    ]
  });
};
