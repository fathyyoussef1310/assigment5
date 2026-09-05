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
const getcomments = async (req, res , next) => {
    try {
        const {postId,userId,content} = req.params;
        const comment = await commentsServices.getComment(postId,userId,content);
        res.status(200).json({
            message: 'Comment get successfully.',
            success: true,
            comment
        })
    }catch(err) {
        next(err);
    }
}
const commentCreation =async (req,res,next) => {
    try{
     const {postId} = req.params;
     const comment = await commentsServices.commentCreation(Number(postId));
     res.status(200).json({
         message: 'Comment creation successfully.',
         success: true,
         data: comment
     })
    }catch(err){
        next(err);
    }
}

module.exports={
    create,
    getcomments,
    commentCreation,
};