const { response } = require("express")
const { createUserController, getAllUserController, getUserByNameController, getUserByIdController, updateUserController, deleteUserController } = require("../controllers/userControllers")
const Joi = require('joi')
const userSchema = Joi.object({
    name:   Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^\d{6}&/).required(),
    role: Joi.string().valid('admin', 'user').required()
})


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
        const {error} = userSchema.validate(req.body)
        if(error) res.status(400).send(error.details[0].message);

        const {name, username, email, password, role} = req.body;
        const response = createUserController(name, username, email, password, role)

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