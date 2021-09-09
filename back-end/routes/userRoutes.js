const { request } = require("express");
const express = require("express");
const userModel = require("../models/users");
const app = express();
app.get("/users", async (request, response) => {
  const users = await userModel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/user", async (req, res) => {
  const user = new userModel(req.body);
  // const user =  userModel.create(request)
  console.log("user", user);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = app;
