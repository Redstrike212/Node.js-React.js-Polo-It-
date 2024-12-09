const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
    id_categoria: {
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
    tableName: 'categoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categoria_pkey",
        unique: true,
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
};
