const User = require('../models/User')
const   bcrypt = require('bcryptjs')

const createUserController = async (name, username, email, password, role) => {
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, username, email, password: hashPassword, role })
    newUser.save()
    return newUser
}
const getAllUserController = async () => {
    if(!User.length) throw new Error("No hay usuarios")
    return await User.find()
}
const getUserByNameController = async (name) => {
    const usersByName = await User.find({name})
    if(!usersByName.length) throw new Error("No existe el usuario")
    return usersByName
}

const getUserByIdController = async (id) => {
    const userById = await User.findById(id)
    return userById
}

const updateUserController = async (id, name, username, email) => {
    const newUser = { name, username, email };
    const updateUser = new User.findByIdAndUpdate(id, newUser, { new: true })
    return updateUser
}

const deleteUserController = async (id) => {
    const index = users.findIndex(user => user.id === Number(id))
    let deleteUser = null
    if(index !== -1) {
        [deleteUser] = users.splice(index, 1)
    }
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