const users = require('../db/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (name, username, email, password, role = 'user') => {
    const userExists = users.some(user => user.email === email)
    console.log(userExists)
    if(userExists) {
        throw new Error('Usuario registrado')
    }
    const id = users.length + 1
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)
    const newUser = { id, name, username, email, password: hashPassword, role }
    users.push(newUser)
    return newUser
}
const loginController = async (email, password) => {
    const user = users.find(user => user.email === email)
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
    console.log(token)
    const {password: _, ...userWhiouthPassword} = user
    return{message: 'Inicio de sesion Exitosa', token, user: userWhiouthPassword}
}

module.exports = {
    registerController,
    loginController
}