const { response } = require("express")
const { createPostController, getAllPostController } = require("../controllers/postControllers")

const getAllPostHandler = async (req, res) => {
    try {
        const { tittle } = req.query
        if (tittle) {
            res.send(`Este el es post ${tittle}`)
        } else {
            const response = await getAllPostController()
            res.send(response)
        }
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
    
}
const getOnePostHandler = (req, res) => {
    res.send('Es un Posteo')
}
const createPostHandler = async (req, res) => {
    try {
        const { tittle, body } = req.body
        const response = await createPostController(tittle, body)
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