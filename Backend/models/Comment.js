const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        types: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    content: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Comment", commentSchema);