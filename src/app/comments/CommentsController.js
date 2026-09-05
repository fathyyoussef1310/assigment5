const commentsServices = require('./CommentsServices');
const create  = async (req, res , next) => {
    try {
        const {comments} = req.body;
        const createComment = await  commentsServices.create(comments);
        res.status(201).json({
            message: 'Comment created successfully.',
            success: true,
            data: createComment
        });
    }catch(err) {
        next(err);
    }
}

module.exports={
    create
};