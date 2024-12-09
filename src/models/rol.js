const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    id_rol: {
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
    tableName: 'rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rol_pkey",
        unique: true,
        fields: [
          { name: "id_rol" },
        ]
      },
    ]
  });
};
