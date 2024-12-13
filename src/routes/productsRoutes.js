const { Router } = require('express');
const { getAllProductHandler, getOneProductHandler, createProductHandler, updateProductHandler, deleteProductHandler } = require('../handlers/productsHandler');
const productsRouter = Router()

productsRouter.get('/', getAllProductHandler)
productsRouter.get('/:id_producto', getOneProductHandler)
productsRouter.post('/', createProductHandler)
productsRouter.put('/:id_producto', updateProductHandler)
productsRouter.delete('/:id_producto', deleteProductHandler)

module.exports = productsRouter
