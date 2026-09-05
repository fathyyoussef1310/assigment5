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
module.exports= {
    create,
    getComment
};