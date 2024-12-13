const { response } = require("express")
const Usuario = require('../models/usuario')
const { createUserController, getAllUserController, getUserByNameController, getUserByIdController, updateUserController, deleteUserController } = require("../controllers/userControllers")
const Joi = require('joi')
const userSchema = Joi.object({
    nombre:   Joi.string().min(3).required(),
    apellido: Joi.string().min(3).required(),
    correo: Joi.string().email().required(),
    password: Joi.string().pattern(/^\d{6}$/).required(),
    id_rol: Joi.number().valid(1, 2).default(2),
})  


const getAllUserHandler = async (req, res) => {
    try {
        const { nombre } = req.query
        if (nombre) {
            const response = await getUserByNameController(nombre)
            res.status(200).send(response)
        } else {
            const response = await getAllUserController()
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).send({ Error: error.message })    
    }
}

const getOneHandler = async (req, res) => {
    try {
        const { id_usuario } = req.params
        const response = await getUserByIdController(id_usuario)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const createUserHandler = async (req, res) => {
    try {
        const {error} = userSchema.validate(req.body)
        if (error) {
            res.status(400).send(error.details[0].message)
        };

        const { nombre, apellido, correo, password, id_rol = 2 } = req.body;
        const response = await createUserController(
            nombre,
            apellido, 
            correo, 
            password, 
            id_rol
        )
        res.json(response)
        return response
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const updateUserHandler = async (req, res) => {
    try {
        const { id_usuario } = req.params
        const {nombre, apellido, correo, password} = req.body;
        const response = await updateUserController(id_usuario, nombre, apellido, correo, password)
        res.send(response)
    } catch (error) {
        res.status(400).send({ Error: error.message })
    }
}

const deleteUserHandler = async (req, res) => {
    try {
        const { id_usuario } = req.params
        const response = await deleteUserController(id_usuario);
        res.send(response)
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