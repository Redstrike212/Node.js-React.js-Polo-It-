const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const productsRouter = require('./productsRoutes');
const authRoutes = require('./authRoutes');
const mainRouter = Router()


// Auth
mainRouter.use('/auth', authRoutes)
// Rutas
mainRouter.use('/users', usersRouter)
// Products
mainRouter.use('/products', productsRouter)

module.exports = mainRouter