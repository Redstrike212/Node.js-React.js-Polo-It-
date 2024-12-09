const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mascota', {
    id_mascota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mascota',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mascota_pkey",
        unique: true,
        fields: [
          { name: "id_mascota" },
        ]
      },
    ]
  });
};
