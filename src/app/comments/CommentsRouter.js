const {Router} = require('express');
const commentsRouter= Router();
const commentsController = require('./CommentsController')

commentsRouter.post('/' , commentsController.create)
commentsRouter.post('/find-or-create' , commentsController.getcomments)
module.exports = commentsRouter;