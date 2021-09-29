import postModel from '../models/Posts';

export const savePost = async (request: any, response: any) => {
    console.log('dfkdfnyeeyeeyy', request.user);

    const post = new postModel({ ...request.body, postedBy: request.user.id });

    // user.encryptPassword(request.body.password)

    try {
        await post.save();
        response.status(200).json({ post });
    } catch (error: any) {
        response.status(400).json({ error });
    }
};

export const getAllPost = async (request: any, response: any) => {
    // console.log('post all', request.user);

    const post = await postModel.find({ postedBy: request.user.id });
    console.log('post', post);
    // user.encryptPassword(request.body.password)

    try {
        response.status(200).json({ post });
    } catch (error: any) {
        response.status(400).json({ error });
    }
};
