const { Router } = require('express');
const { getAllUserHandler, getOneHandler, createUserHandler, updateUserHandler, deleteUserHandler } = require('../handlers/userHandler');
const usersRouter = Router()

// Rutas
usersRouter.get('/', getAllUserHandler)
usersRouter.get('/:id', getOneHandler)
usersRouter.post('/', createUserHandler)
usersRouter.put('/:id', updateUserHandler)
usersRouter.delete('/:id', deleteUserHandler)


module.exports = usersRouter;
