const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
app.use(userRouter);
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
