var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _mascota = require("./mascota");
var _producto = require("./producto");
var _producto_mascota = require("./producto_mascota");
var _producto_presentaciones = require("./producto_presentaciones");
var _rol = require("./rol");
var _usuario = require("./usuario");
var _venta = require("./venta");
var _venta_detalle = require("./venta_detalle");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var mascota = _mascota(sequelize, DataTypes);
  var producto = _producto(sequelize, DataTypes);
  var producto_mascota = _producto_mascota(sequelize, DataTypes);
  var producto_presentaciones = _producto_presentaciones(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var venta = _venta(sequelize, DataTypes);
  var venta_detalle = _venta_detalle(sequelize, DataTypes);

  mascota.belongsToMany(producto, { as: 'id_producto_productos', through: producto_mascota, foreignKey: "id_mascota", otherKey: "id_producto" });
  producto.belongsToMany(mascota, { as: 'id_mascota_mascota', through: producto_mascota, foreignKey: "id_producto", otherKey: "id_mascota" });
  producto.belongsTo(categoria, { as: "id_categoria_categorium", foreignKey: "id_categoria"});
  categoria.hasMany(producto, { as: "productos", foreignKey: "id_categoria"});
  producto.belongsTo(mascota, { as: "id_mascota_mascotum", foreignKey: "id_mascota"});
  mascota.hasMany(producto, { as: "productos", foreignKey: "id_mascota"});
  producto_mascota.belongsTo(mascota, { as: "id_mascota_mascotum", foreignKey: "id_mascota"});
  mascota.hasMany(producto_mascota, { as: "producto_mascota", foreignKey: "id_mascota"});
  producto_mascota.belongsTo(producto, { as: "id_producto_producto", foreignKey: "id_producto"});
  producto.hasMany(producto_mascota, { as: "producto_mascota", foreignKey: "id_producto"});
  producto_presentaciones.belongsTo(producto, { as: "id_producto_producto", foreignKey: "id_producto"});
  producto.hasMany(producto_presentaciones, { as: "producto_presentaciones", foreignKey: "id_producto"});
  venta_detalle.belongsTo(producto, { as: "id_producto_producto", foreignKey: "id_producto"});
  producto.hasMany(venta_detalle, { as: "venta_detalles", foreignKey: "id_producto"});
  usuario.belongsTo(rol, { as: "id_rol_rol", foreignKey: "id_rol"});
  rol.hasMany(usuario, { as: "usuarios", foreignKey: "id_rol"});
  venta.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(venta, { as: "venta", foreignKey: "id_usuario"});
  venta.belongsTo(venta_detalle, { as: "id_venta_detalle_venta_detalle", foreignKey: "id_venta_detalle"});
  venta_detalle.hasMany(venta, { as: "venta", foreignKey: "id_venta_detalle"});

  return {
    categoria,
    mascota,
    producto,
    producto_mascota,
    producto_presentaciones,
    rol,
    usuario,
    venta,
    venta_detalle,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
