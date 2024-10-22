const { Router } = require('express');
const usersRouter = require('./usersRoutes');
const postsRouter = require('./postsRoutes');
const mainRouter = Router()

// Rutas
mainRouter.use('/users', usersRouter)
// Posts
mainRouter.use('/posts', postsRouter)

module.exports = mainRouter