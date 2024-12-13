const Producto = require('../models/producto')


const getAllProductController = async () => {
    return await Producto.findAll()
}

const getProductByIdController = async (id_producto) => {
    return await Producto.findByPk(id_producto)
}

const getProductByTitleController = async (nombre) => {
    return await Producto.findOne({
        where: {
            nombre
        }
    })
}
const createProductController = async (id_categoria, id_mascota, nombre, estado = true, descripcion) => {
    const maxIdProduct = await Producto.max('id_producto')
    const newId = maxIdProduct ? maxIdProduct + 1 : 1
    const newProduct = await Producto.create({ 
        id_producto: newId,
        id_categoria, 
        id_mascota, 
        nombre,
        estado,
        descripcion
    })
    return newProduct
}

const updateProductController = async (id_producto, updateData) => {
    const producto = await Producto.findByPk(id_producto)

    if (updateData.estado === undefined) {
        updateData.estado = true
    }

    await producto.update(updateData)
    return producto
}

const deleteProductController = async () => {
    
}


module.exports = {
    createProductController,
    getAllProductController,
    getProductByTitleController,
    getProductByIdController,
    updateProductController
}