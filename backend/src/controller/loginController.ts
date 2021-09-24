import userModel from '../models/Users'

export const loginControllerPost = async (request: any, response: any) => {
    const { email, password } = request.body``
    //finds the user and returns it as user
    const user = userModel.findOne({ email }, (err: any, doc: any) => {
        if (err) {
            console.log('error')
        } else {
            if (!doc) {
                console.log('invalid user')
            } else {
                return doc
            }
        }
    })
}
