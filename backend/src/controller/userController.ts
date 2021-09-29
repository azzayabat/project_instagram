import userModel from '../models/Users';

export const userControllerGet = async (request: any, response: any) => {
    const users = await userModel.find({});
    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
};

export const register = async (request: any, response: any) => {
    // request.body.password = bcrypt.hashSync(request.body.password, salt)
    const user = new userModel(request.body);

    // user.encryptPassword(request.body.password)

    try {
        await user.save();
        request.send(user);
        console.log('saved');
        // send 201 if a new user created;
    } catch (error: any) {
        // console.log("error", error.code);
        if (error.code === 11000) {
            // request.send({ error: 'email is already in use' })
            // request.send('valid')
            console.log('email is already in use');
        } else {
            // request.status(500).send(error)
            console.log('sent');
        }
    }
};

export const login = async (request: any, response: any) => {
    const { email, password } = request.body;

    const res = userModel.findOne({ email: email }, async function (err: any, result: any) {
        if (err) {
            console.log("user doesn't exist, please sign up!", err);
        } else {
            console.log('result', result);
            // let encryptPassword = await bcrypt.compare(password, result.password)
            const success = await result.checkPassword(password);
            // console.log('success:', success)
            if (!success) {
                console.log('worng pass');
            } else {
                console.log('same');
                const accessToken = result.createAccessToken();

                console.log('access token', accessToken);
                response.status(200).json({ accessToken });
                // expression date ywuulah
                // const token = jwt.sign({ id: result._id, username: result.username }, JWT_SECRET)
                // response.status(200).send(token)
            }
        }
    });
};
