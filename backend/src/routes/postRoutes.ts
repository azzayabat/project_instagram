import express from 'express';
import { authentication } from '../controller/authController';
import { savePost, getAllPost } from '../controller/postController';

const postRouter = express.Router();

postRouter.get('/post', authentication, getAllPost);
postRouter.post('/post', authentication, savePost);

export default postRouter;
