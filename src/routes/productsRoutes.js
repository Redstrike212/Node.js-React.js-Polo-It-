const { Router } = require('express');
const { getAllProductHandler, getOneProductHandler, createProductHandler, updateProductHandler, deleteProductHandler } = require('../handlers/productsHandler');
const productsRouter = Router()

productsRouter.get('/', getAllProductHandler)
productsRouter.get('/:id', getOneProductHandler)
productsRouter.post('/', createProductHandler)
productsRouter.put('/:id', updateProductHandler)
productsRouter.delete('/:id', deleteProductHandler)

module.exports = productsRouter
