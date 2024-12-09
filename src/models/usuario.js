const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "usuario_correo_key"
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'rol',
        key: 'id_rol'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_correo_key",
        unique: true,
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
