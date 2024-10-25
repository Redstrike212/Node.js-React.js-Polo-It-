const { Router } = require('express');
const { getAllUserHandler, getOneHandler, createUserHandler, updateUserHandler, deleteUserHandler } = require('../handlers/userHandler');
const { verifyToken } = require('../middleware/verifyMiddleware');
const authorizeAdmin = require('../middleware/authorizationMiddleware');
const usersRouter = Router()

// Rutas
usersRouter.get('/', getAllUserHandler)
usersRouter.get('/:id', getOneHandler)
usersRouter.post('/', verifyToken, authorizeAdmin, createUserHandler)
usersRouter.put('/:id', verifyToken, authorizeAdmin, updateUserHandler)
usersRouter.delete('/:id', verifyToken, authorizeAdmin, deleteUserHandler)


module.exports = usersRouter;
