const User = require('../models/User')
const users = require('../db/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (name, username, email, password, role = 'user') => {
    // const userExists = users.some(user => user.email === email)
    // console.log(userExists)
    // if(userExists) {
    //     throw new Error('Usuario registrado')
    // }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, username, email, password: hashPassword, role })
    newUser.save()
    return newUser
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