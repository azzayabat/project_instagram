import express from 'express'
import { userControllerGet, userControllerPost } from '../controller/userController'
import { loginControllerPost } from '../controller/loginController'

const userRouter = express.Router()

userRouter.get('/users', userControllerGet)
userRouter.post('/user', userControllerPost)
userRouter.post('/login', loginControllerPost)

// import bcryptjs from 'bcryptjs'
// import bcryptjs = require('bcryptjs')

//  var salt = bcrypt.genSaltSync(10);

// userRouter.get('/users', async (request, response) => {
//     const users = await userModel.find({})
//     try {
//         response.send(users)
//     } catch (error) {
//         response.status(500).send(error)
//     }
// })

// userRouter.post('/user', async (req, res) => {
//     //hashing passwords
//     //    req.body.password = bcrypt.hashSync(req.body.password, salt);
//     //creating a new user model with hashed pass
//     const user = new userModel(req.body)
//     // const user =  userModel.create(request)
//     // console.log("user", user);
//     try {
//         await user.save()
//         res.send(user)
//         console.log('saved')
//     } catch (error: any) {
//         // console.log("error", error.code);
//         if (error.code === 11000) {
//             res.status(500).send({ error: 'email is already in use' })
//         } else {
//             res.status(500).send(error)
//         }
//     }
// })

// userRouter.post('/login', async (req, res) => {
//     const { email, password } = req.body

//     //finds the user and returns it as user
//     const user = userModel.findOne({ email }, (err: any, doc: any) => {
//         if (err) {
//             console.log('error')
//         } else {
//             // console.log("doc", doc);
//             if (!doc) {
//                 console.log('invalid user')
//             } else {
//                 return doc
//             }
//         }
//     })

//     // bcrypt.compare(password, user.password, function (err, result) {
//     //   if (err) {
//     //     console.log("error");
//     //   } else {
//     //     console.log("resulyjhfdkg");
//     //   }
//     // });
// })

export default userRouter