const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const  registerController = async (userData) => {
    const salt = await bcrypt.genSalt(10)
    userData.password = await bcrypt.hash(userData.password, salt)

    const existingUser = await Usuario.findOne({
        where: { correo: userData.correo },
    })
    if(existingUser) {
        throw new Error('Correo ya registrado')
    }
    const newUser = await Usuario.create(userData)
    return newUser
}
const loginController = async (correo, password) => {
    const user = await Usuario.findOne({ where: {correo} })
    if(!user) {
        throw new Error('El usuario no esta registrado')
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch) {
        console.log(user.password);
        console.log(password);
        throw new Error('Contraseña incorrecta')
    }
    const token = jwt.sign({id_usuario: user.id_usuario, correo: user.correo, id_rol: user.id_rol}, 'my_secret_key', {
        expiresIn: "1h"
    })
    return {
        message: 'Inicio de sesión exitoso',
        user: {
            id_usuario: user.id_usuario,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            id_rol: user.id_rol,
        },
        token,
    };
}

module.exports = {
    registerController,
    loginController
}