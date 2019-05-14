const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db =
  "mongodb+srv://rohitgupta:u9vPEX97yFhnm4Us@cluster0-viozg.mongodb.net/test?retryWrites=true";
const User = require("../model/user");
mongoose.connect(db, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("Erroe is", err);
  } else {
    console.log("Connected to Mongo DB");
  }
});


router.get("/", function (req, res) {
  res.send("I am from API routes");
});

// register api
router.post("/register", (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  user.save((error, registerUser) => {
    if (error) {
      console.log('Error Save', error);
    } else {
      res.status(200).send(registerUser);
    }
  });
});

// login api
router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (!user) {
      res.status(401).send('Invalid Email');
    } else if(user.password !== userData.password){
      res.status(401).send('Invalid Password');
    }
    else{
      res.status(200).send(user);
    }
  });

});

module.exports = router;