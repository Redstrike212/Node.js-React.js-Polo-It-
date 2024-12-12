const Product = require('../models/producto')

const getAllProductController = async () => {
    return await Product.find().populate({
        path: "id_producto",
        select: "nombre",
    })
}

const getProductByIdController = async (id_producto) => {
    const productById = await Product.findById(id_producto).populate({
        path: "id_producto",
        select: "nombre",
    })
    return productById
}

const getProductByTitleController = async (nombre) => {
    return await Product.find({nombre})
}
const createProductController = async (title, body, userId) => {
    const newProduct = await Product.create({ title, body, userId })
    return newProduct
}


module.exports = {
    createProductController,
    getAllProductController,
    getProductByTitleController,
    getProductByIdController
}