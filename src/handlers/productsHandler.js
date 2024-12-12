const { response } = require("express")
const { createProductController, getAllProductController, getProductByTitleController, getProductByIdController } = require("../controllers/productControllers")

const getAllProductHandler = async (req, res) => {
    try {
        const { nombre } = req.query
        if (nombre) {
            const response = await getProductByTitleController(nombre)
            res.send(response)
        } else {
            const response = await getAllProductController()
            res.send(response)
        }
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
    
}
const getOneProductHandler = async (req, res) => {
    try {
        const { id } = req.params
        const response = await getProductByIdController(id)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const createProductHandler = async (req, res) => {
    try {
        const { id_categoria, id_mascota, nombre } = req.body
        const response = await createProductController(id_categoria, id_mascota, nombre)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const updateProductHandler = (req, res) => {
    res.send('Modificaste el Producto')
}
const deleteProductHandler = (req, res) => {
    res.send('Eliminaste el Producto')
}

module.exports = {
    getAllProductHandler,
    getOneProductHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler
}