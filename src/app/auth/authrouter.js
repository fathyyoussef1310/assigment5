const {Router} = require('express');
const authRouter = Router()
const authController = require('./authController');

authRouter.post('/signUp', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/:id', authController.getUsersById);
authRouter.get('/by-email/:email', authController.getUserByEmail);
authRouter.put('/:id', authController.updateUser);
module.exports = authRouter;