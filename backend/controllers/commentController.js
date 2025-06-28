const Comment = require("../models/commentModel")

const getCommentByProductId = async (req, res) => {
    try {
        const comments = await Comment.find({ productId: req.params.id })
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
}

const postCommentById = async (req,res) => {
    try {
        const {text} = req.body

        const comment = await Comment.create(text)
        
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error)
    }
}