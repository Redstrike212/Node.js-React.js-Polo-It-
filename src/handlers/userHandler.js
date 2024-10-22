const { response } = require("express")
const { createUserController, getAllUserController, getUserByNameController, getUserByIdController, updateUserController, deleteUserController } = require("../controllers/userControllers")
const Joi = require('joi')


const getAllUserHandler = (req, res) => {
    try {
        const {name} = req.query
        if (name) {
            const response = getUserByNameController(name)
            res.status(200).send(response)
        } else {
            const response = getAllUserController()
            console.log(response)
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).send({ Error: error.message })    
    }
}

const getOneHandler = (req, res) => {
    try {
        const { id } = req.params
        const response = getUserByIdController(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const createUserHandler = (req, res) => {
    try {
        const {name, username, email} = req.body;
        const response = createUserController(name, username, email)
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const updateUserHandler = (req, res) => {
    try {
        const { id } = req.params
        const {name, username, email} = req.body;
        const response = updateUserController(id, name, username, email)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
    
}

const deleteUserHandler = (req, res) => {
    try {
        const { id } = req.params
        const response = deleteUserController(id);
        console.log(response)
        res.send('Eliminando un Usuario')
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
    
}

module.exports = {
    getAllUserHandler,
    getOneHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
}