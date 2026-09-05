const {Router} = require('express');
const commentsRouter= Router();
const commentsController = require('./CommentsController')

commentsRouter.post('/' , commentsController.create)
commentsRouter.post('/find-or-create' , commentsController.getcomments),
commentsRouter.get('/newest/:postId' , commentsController.commentCreation),
module.exports = commentsRouter;