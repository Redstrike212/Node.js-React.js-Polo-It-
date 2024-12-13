const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const  registerController = async (userData) => {
    const hashPassword = await bcrypt.genSalt(10)
    userData.password = await bcrypt.hash(userData.password, hashPassword)
    
    const [user, created] = await Usuario.findOrCreate({
        where: { correo: userData.correo },
        defaults: {
            ...userData,
            id_rol: 2
        }
    })
    if(created) {
        throw new Error('Correo ya registrado')
    }

    return user
}
const loginController = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) {
        throw new Error('El usuario no esta registrado')
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch) {
        throw new Error('Contraseña incorrecta')
    }
    const token = jwt.sign({id: user.id, role: user.role}, 'my_secret_key', {
        expiresIn: "1h"
    })
    const {password: _, ...userWhiouthPassword} = user
    return{message: 'Inicio de sesion Exitosa', token, user: userWhiouthPassword}
}

module.exports = {
    registerController,
    loginController
}