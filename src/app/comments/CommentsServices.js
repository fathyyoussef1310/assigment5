const commentsRepository = require("./CommentsRepository");

const create  = async function(comments){
    const comment = await commentsRepository.create(comments);
    return comment;
}
const getComment = async function(postId, userId, content){
 const comment = await  commentsRepository.findOrCreateComment(
     postId,
     userId,
     content
 );
 return comment;
}
const commentCreation = async function(postId,commentId){
    const postExits = await commentsRepository.checkCommentExistence(postId)
    if(!postExits){
        throw new Error("Comment ");
    }
    const comment = await commentsRepository.commentCreation(postId);
    return comment;
}
module.exports= {
    create,
    getComment,
    commentCreation
};