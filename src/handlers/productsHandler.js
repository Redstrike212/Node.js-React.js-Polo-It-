const { response } = require("express")
const Categoria = require('../models/categoria')
const Mascota = require('../models/mascota')
const { createProductController, getAllProductController, getProductByTitleController, getProductByIdController, updateProductController } = require("../controllers/productControllers")

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
        const { id_producto } = req.params
        const response = await getProductByIdController(id_producto)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const createProductHandler = async (req, res) => {
    try {
        const { id_categoria, id_mascota, nombre, estado = true, descripcion } = req.body

        const categoriaExiste = await Categoria.findByPk(id_categoria)
        if (!categoriaExiste) {
            throw new Error(`La categoria con id ${id_categoria} no existe`);
        }

        const mascotaExiste = await Mascota.findByPk(id_mascota)
        if (!mascotaExiste) {
            throw new Error(`La mascota con id ${id_mascota} no existe`);
        }

        const response = await createProductController(id_categoria, id_mascota, nombre, estado, descripcion)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const updateProductHandler = async (req, res) => {
    try {
        const { id_producto } = req.params
        const { id_categoria, id_mascota, nombre, estado = true, descripcion } = req.body

        const categoriaExiste = await Categoria.findByPk(id_categoria)
        if (!categoriaExiste) {
            throw new Error(`La categoria con id ${id_categoria} no existe`);
        }

        const mascotaExiste = await Mascota.findByPk(id_mascota)
        if (!mascotaExiste) {
            throw new Error(`La mascota con id ${id_mascota} no existe`);
        }

        const response = await updateProductController(id_producto, {
            id_categoria,
            id_mascota, 
            nombre, 
            estado: estado !== undefined ? estado : true, 
            descripcion 
        })
        res.send(response)
    } catch (error) {
        
    }
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