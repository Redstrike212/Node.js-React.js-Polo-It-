const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producto', {
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'producto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "producto_pkey",
        unique: true,
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
