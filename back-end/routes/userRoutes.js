const { request } = require("express");
const express = require("express");
const userModel = require("../models/users");
const bcrypt = require("bcryptjs");
const e = require("express");

const app = express();
var salt = bcrypt.genSaltSync(10);

app.get("/users", async (request, response) => {
  const users = await userModel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/user", async (req, res) => {
  //hashing passwords
  req.body.password = bcrypt.hashSync(req.body.password, salt);
  //creating a new user model with hashed pass
  const user = new userModel(req.body);
  // const user =  userModel.create(request)
  // console.log("user", user);
  try {
    await user.save();
    res.send(user);
    console.log("saved");
  } catch (error) {
    // console.log("error", error.code);
    if (error.code === 11000) {
      res.status(500).send({ error: "email is already in use" });
    } else {
      res.status(500).send(error);
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //finds the user and returns it as user
  const user = userModel.findOne({ email }, (err, doc) => {
    if (err) {
      console.log("error");
    } else {
      // console.log("doc", doc);
      if (!doc) {
        console.log("invalid user");
      } else {
        return doc;
      }
    }
  });
});

module.exports = app;
