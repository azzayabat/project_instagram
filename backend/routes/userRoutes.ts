import express from 'express'
import userModel from '../models/Users'
// import bcryptjs from 'bcryptjs'
// import bcryptjs = require('bcryptjs')
const userRouter = express.Router()

const app = express()
// var salt = bcryptjs.genSaltSync(10)

app.get('/users', async (req, res) => {
    const users = await userModel.find({})
    try {
        res.send(users)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/user', async (req, res) => {
    //hashing passwords
    // req.body.password = bcryptjs.hashSync(req.body.password, salt)
    //creating a new user model with hashed pass
    const user = new userModel(req.body)
    // const user =  userModel.create(request)
    // console.log("user", user);
    try {
        await user.save()
        res.send(user)
        console.log('saved')
    } catch (error: any) {
        // console.log("error", error.code);
        if (error.code === 11000) {
            res.status(500).send({ error: 'email is already in use' })
        } else {
            res.status(500).send(error)
        }
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    //finds the user and returns it as user
    const user = userModel.findOne({ email }, (err: any, doc: any) => {
        if (err) {
            console.log('error')
        } else {
            // console.log("doc", doc);
            if (!doc) {
                console.log('invalid user')
            } else {
                return doc
            }
        }
    })

    // bcrypt.compare(password, user.password, function (err, result) {
    //   if (err) {
    //     console.log("error");
    //   } else {
    //     console.log("resulyjhfdkg");
    //   }
    // });
})

export default userRouter

// userRoute-oosoo controller-oos ashiglah
// controller
//  - user
//  - post   validate req
// Service
//  - userService
//  - postService

// userRouter.get('/users', async (request, response) => {
//     const users = await userModel.find({})
//     try {
//         response.send(users)
//     } catch (error) {
//         response.status(500).send(error)
//     }
// })
// userRouter.post('/user', async (request, response) => {
//     const user = new userModel(request.body)
//     try {
//         await user.save()
//         response.send(user)
//     } catch (error) {
//         response.status(500).send(error)
//     }
// })

// export default userRouter

// const { request } = require('express')
// const express = require('express')
// const userModel = require('../models/users')
