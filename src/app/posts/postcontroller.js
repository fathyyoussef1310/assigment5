const postService = require('./postsServices')
const prisma = require("../../common/db/prisma");
const commentService = require("./postsServices");
async function createPost (req, res,next) {
    try{
        const {title, content, authorId} = req.body;
        const post = await postService.createPost(title, content, authorId);
        res.status(200).json({
            status: 'success',
            message: 'Post created successfully ',
            post: post,
        })
    }catch(e){
        next(e);
    }
}
async function deletePost (req,res,next){
    try{
        const {id}  = req.params;
        const deletePost = await postService.deletePost(id);
        if(!deletePost) {
            res.status(404).json({
                status: 'error',
                message: 'Post not found'
            })
        }
            res.status(200).json({
                status: 'success',
                message: 'Post deleted successfully ',
            })
    }catch(e){
        next(e);
    }
}
async function commentsCount (req,res,next){
    try{
        const post = await commentService.getPosts();
        res.status(200).json({
            status: 'success',
            message: 'Post comments count ',
            post: post,
        })
    }catch(e){
        next(e);
    }
}
async function postsCommentsOnly (req,res,next){
    try{
        const post = await commentService.postsComments();
        res.status(200).json({
            status: 'success',
            message: 'Post comments count ',
            post: post,
        })
    }catch(e){
        next(e);
    }
}
module.exports = {createPost , deletePost , commentsCount,postsCommentsOnly};