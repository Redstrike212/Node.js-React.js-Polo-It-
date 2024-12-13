const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

const createUserController = async (nombre, apellido, correo, password, id_rol = 2) => {
    const hashPassword = await bcrypt.hash(password, 10)
    const maxIdUser = await Usuario.max('id_usuario')
    const newId = maxIdUser ? maxIdUser + 1 : 1
    const newUser = await Usuario.create({ id_usuario: newId, nombre, apellido, correo, password: hashPassword, id_rol })
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
    const userById = await Usuario.findByPk(id_usuario)
    return userById
}

const updateUserController = async (id_usuario, nombre, apellido, correo, password) => {
    const usuario = await Usuario.findByPk(id_usuario)
    const hashedPassword = usuario.password;
    
    if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
    }

    await usuario.update({
        nombre: nombre || usuario.nombre,
        apellido: apellido || usuario.apellido,
        correo: correo || usuario.correo,
        password: hashedPassword || usuario.password
    })
    return usuario
}

const deleteUserController = async (id_usuario) => {
    const usuario = await Usuario.findByPk(id_usuario)
    await usuario.destroy()
    return { message: "Usuario eliminado exitosamente" }
}



module.exports = {
    createUserController,
    getAllUserController,
    getUserByNameController,
    getUserByIdController,
    updateUserController,
    deleteUserController
}