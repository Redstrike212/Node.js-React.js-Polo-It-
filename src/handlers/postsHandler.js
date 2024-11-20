const { response } = require("express")
const { createPostController, getAllPostController, getPostByTitleController, getPostByIdController } = require("../controllers/postControllers")

const getAllPostHandler = async (req, res) => {
    try {
        const { title } = req.query
        if (title) {
            const response = await getPostByTitleController(title)
            res.send(response)
        } else {
            const response = await getAllPostController()
            res.send(response)
        }
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
    
}
const getOnePostHandler = async (req, res) => {
    try {
        const { id } = req.params
        const response = await getPostByIdController(id)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const createPostHandler = async (req, res) => {
    try {
        const { title, body, userId } = req.body
        const response = await createPostController(title, body, userId)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}
const updatePostHandler = (req, res) => {
    res.send('Modificaste el Posteo')
}
const deletePostHandler = (req, res) => {
    res.send('Eliminaste el Posteo')
}

module.exports = {
    getAllPostHandler,
    getOnePostHandler,
    createPostHandler,
    updatePostHandler,
    deletePostHandler
}