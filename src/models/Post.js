const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post