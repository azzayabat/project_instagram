import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './src/routes/userRoutes';
import postRouter from './src/routes/postRoutes';

require('dotenv').config();

const app = express();

const port = process.env.PORT;
const uri: string = process.env.ATLAS_URI || '';

app.use(cors());
app.use(express.json());

//router
app.use(userRouter);
app.use(postRouter);

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
