const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const productsRouter = require('./productsRoutes');
const authRoutes = require('./authRoutes');
const { mascotRouter } = require('./mascotaRoutes');
const mainRouter = Router()



mainRouter.use('/mascot', mascotRouter)
// Auth
mainRouter.use('/auth', authRoutes)
// Rutas
mainRouter.use('/users', usersRouter)
// Products
mainRouter.use('/products', productsRouter)

module.exports = mainRouter