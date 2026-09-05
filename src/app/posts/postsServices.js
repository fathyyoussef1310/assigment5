const postsRepository = require('../../app/posts/postsRepository');
async function createPost(title, content , authorId) {
    const post = await postsRepository.create({title, content, authorId});
    if (!post) {
        throw new Error(`Error in Creating This Post`);
    }
    return post;
}
async function deletePost(postId) {
    const post = await postsRepository.deletePost(postId);
    if (!post) {
        throw new Error(` This Post is not Found`);
    }
    return post;
}
async  function getPosts(){
    const post = await postsRepository.commentsCount();
    if (!post) {
        throw new Error(`No Posts found`);
    }
    return post;
}
async  function postsComments(){
    const post = await postsRepository.getCommentsCount();
    if (!post) {
        throw new Error(`No Posts found`);
    }
    return post;
}
module.exports = {createPost , deletePost , getPosts,postsComments};