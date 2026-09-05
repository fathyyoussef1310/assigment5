const{Router} = require('express');
const postRouter = Router()
const postController = require('./postcontroller')
const {deletePost} = require("./postsServices");
postRouter.post('/' ,postController.createPost);
postRouter.delete('/:id' ,postController.deletePost);
postRouter.get('/details', postController.commentsCount);
postRouter.get('/comment-count', postController.postsCommentsOnly);
module.exports = postRouter;