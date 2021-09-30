import express from 'express';
import { authentication } from '../controller/authController';
import { savePost, getAllPostOfUser } from '../controller/postController';

const postRouter = express.Router();

postRouter.get('/post', authentication, getAllPostOfUser);
postRouter.post('/post', authentication, savePost);

export default postRouter;
