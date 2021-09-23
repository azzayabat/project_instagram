import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes'

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const uri: string =
    process.env.ATLAS_URI ||
    'mongodb+srv://azzaya:azzaya@cluster0.wxy8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())

//router
app.use(userRouter)

mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
