const {Router} = require('express');
const commentsRouter= Router();
const commentsController = require('./CommentsController')

commentsRouter.post('/' , commentsController.create)
module.exports = commentsRouter;