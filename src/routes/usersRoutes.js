const { Router } = require('express');
const { getAllUserHandler, getOneHandler, createUserHandler, updateUserHandler, deleteUserHandler } = require('../handlers/userHandler');
const { verifyToken } = require('../middleware/verifyMiddleware');
const authorizeAdmin = require('../middleware/authorizationMiddleware');
const usersRouter = Router()

// Rutas
usersRouter.get('/', getAllUserHandler)
usersRouter.get('/:id_usuario', getOneHandler)
usersRouter.post('/', createUserHandler)
usersRouter.put('/:id_usuario', updateUserHandler)
usersRouter.delete('/:id_usuario', deleteUserHandler)


module.exports = usersRouter;
