const Post = require('../models/Post')

const getAllPostController = async () => {
    return await Post.find().populate({
        path: "userId",
        select: "name -_id",
    })
}

const getPostByIdController = async (id) => {
    const postById = await Post.findById(id).populate({
        path: "userId",
        select: "name -_id",
    })
    return postById
}

const getPostByTitleController = async (title) => {
    return await Post.find({title})
}
const createPostController = async (title, body, userId) => {
    const newPost = await Post.create({ title, body, userId })
    return newPost
}


module.exports = {
    createPostController,
    getAllPostController,
    getPostByTitleController,
    getPostByIdController
}