const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const postsRouter = require('./postsRoutes');
const authRoutes = require('./authRoutes');
const mainRouter = Router()


// Auth
mainRouter.use('/auth', authRoutes)
// Rutas
mainRouter.use('/users', usersRouter)
// Posts
mainRouter.use('/posts', postsRouter)

module.exports = mainRouter