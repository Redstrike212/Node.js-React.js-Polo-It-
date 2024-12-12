const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

const createUserController = async (nombre, apellido, correo, password, id_rol = 2) => {
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await Usuario.create({ nombre, apellido, correo, password: hashPassword, id_rol })
    return newUser
}
const getAllUserController = async () => {
    return await Usuario.findAll()
}
const getUserByNameController = async (nombre) => {
    const usersByName = await Usuario.findOne({
        where: {
            nombre
        }
    })
    return usersByName
}

const getUserByIdController = async (id_usuario) => {
    const userById = await Usuario.findById(id_usuario)
    return userById
}

const updateUserController = async (id, nombre, apellido, correo) => {
    const newUser = { nombre, apellido, correo };
    const updateUser = await User.findByIdAndUpdate(id, newUser, { new: true })
    return updateUser
}

const deleteUserController = async (id) => {
    let deleteUser = await User.findByIdAndDelete(id)
    return deleteUser
}



module.exports = {
    createUserController,
    getAllUserController,
    getUserByNameController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}