const Post = require('../models/Post')

const getAllPostController = async (tittle) => {
    return await Post.find()
}

const createPostController = async (tittle, body) => {
    const newPost = await Post.create({ tittle, body })
    return newPost
}


module.exports = {
    createPostController,
    getAllPostController

}