import userModel from '../models/Users'
import bcrypt from 'bcrypt'

var salt = bcrypt.genSaltSync(10)
export const userControllerGet = async (request: any, response: any) => {
    const users = await userModel.find({})
    try {
        response.send(users)
    } catch (error) {
        response.status(500).send(error)
    }
}

export const userControllerPost = async (request: any, response: any) => {
    request.body.password = bcrypt.hashSync(request.body.password, salt)
    const user = new userModel(request.body)
    // console.log('user', user)
    try {
        await user.save()
        request.send(user)
        console.log('saved')
    } catch (error: any) {
        // console.log("error", error.code);
        if (error.code === 11000) {
            // request.send({ error: 'email is already in use' })
            console.log('email is already in use')
        } else {
            // request.status(500).send(error)
            console.log('sent')
        }
    }
}
