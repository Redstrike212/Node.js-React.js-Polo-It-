const { response } = require("express")
const { createUserController, getAllUserController, getUserByNameController, getUserByIdController, updateUserController, deleteUserController } = require("../controllers/userControllers")

const getAllUserHandler = (req, res) => {
    const {name} = req.query
    if (name) {
        const response = getUserByNameController(name)
        res.status(200).send(response)
    } else {
        const response = getAllUserController()
        console.log(response)
        res.status(200).send(response)
    }
}

const getOneHandler = (req, res) => {
    const { id } = req.params
    const response = getUserByIdController(id)
    res.status(200).send(response)
}

const createUserHandler = (req, res) => {
    try {
        const {name, username, email} = req.body;
        const response = createUserController(name, username, email)
        res.status(201).send(response)
    } catch (error) {
        res.status(418).send({ Error: error.message })
    }
}

const updateUserHandler = (req, res) => {
    const { id } = req.params
    const {name, username, email} = req.body;
    const response = updateUserController(id, name, username, email)
    res.send(response)
}

const deleteUserHandler = (req, res) => {
    const { id } = req.params
    const response = deleteUserController(id);
    console.log(response)
    res.send('Eliminando un Usuario')
}

module.exports = {
    getAllUserHandler,
    getOneHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
}