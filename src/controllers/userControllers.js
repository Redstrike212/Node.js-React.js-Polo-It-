const users = require('../db/database')

const createUserController = (name, username, email) => {
    const id = users.length + 1
    const newUser = { id, name, username, email }
    if(!name || !username || !email) throw new Error("Faltan datos")
    users.push(newUser)
    return newUser
}
const getAllUserController = () => {
    if(!users.length) throw new Error("No hay usuarios")
    return users
}
const getUserByNameController = (name) => {
    const usersByName = users.filter(user => user.name === name)
    if(!usersByName.length) throw new Error("No existe el usuario")
    return usersByName
}

const getUserByIdController = (id) => {
    const userById = users.find(user => user.id === Number(id))
    return userById
}

const updateUserController = (id, name, username, email) => {
    const newUser = { id, name, username, email };
    const userById = users.find(user => user.id === Number(id));
    if(userById) {
        Object.assign(userById, newUser)
    }
    return userById
}

const deleteUserController = (id) => {
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