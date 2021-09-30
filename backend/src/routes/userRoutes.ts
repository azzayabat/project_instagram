import express from 'express';
import { authentication } from '../controller/authController';
import { users, login, register } from '../controller/userController';

const userRouter = express.Router();

// post methods
userRouter.post('/login', login);
userRouter.post('/signup', register);

// get methods
userRouter.get('/users', users);

export default userRouter;
