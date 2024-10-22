const getAllPostHandler = (req, res) => {
    res.send('Esto son los Posteos')
}
const getOnePostHandler = (req, res) => {
    res.send('Es un Posteo')
}
const createPostHandler = (req, res) => {
    res.send('Creaste el Posteo')
}
const updatePostHandler = (req, res) => {
    res.send('Modificaste el Posteo')
}
const deletePostHandler = (req, res) => {
    res.send('Eliminaste el Posteo')
}

module.exports = {
    getAllPostHandler,
    getOnePostHandler,
    createPostHandler,
    updatePostHandler,
    deletePostHandler
}