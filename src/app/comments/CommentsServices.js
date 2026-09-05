const commentsRepository = require("./CommentsRepository");

const create  = async function(comments){
    const comment = await commentsRepository.create(comments);
    return comment;
}
module.exports= {
    create
};