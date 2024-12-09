const Product = require('../models/producto')

const getAllProductController = async () => {
    return await Product.find().populate({
        path: "userId",
        select: "name -_id",
    })
}

const getProductByIdController = async (id) => {
    const productById = await Product.findById(id).populate({
        path: "userId",
        select: "name -_id",
    })
    return productById
}

const getProductByTitleController = async (title) => {
    return await Product.find({title})
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