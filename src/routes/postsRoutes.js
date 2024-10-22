const { Router } = require('express');
const { getAllPostHandler, getOnePostHandler, createPostHandler, updatePostHandler, deletePostHandler } = require('../handlers/postsHandler');
const postsRouter = Router()

postsRouter.get('/', getAllPostHandler)
postsRouter.get('/:id', getOnePostHandler)
postsRouter.post('/', createPostHandler)
postsRouter.put('/:id', updatePostHandler)
postsRouter.delete('/:id', deletePostHandler)

module.exports = postsRouter
