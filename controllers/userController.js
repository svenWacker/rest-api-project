const UserData = require("../model/userModel");
const express = require("express");

// Middleware
// Get one employee by name (only one)
const getUser = async (req, res, next) => {
  let user;
  try {
    user = await UserData.findOne({ user: req.params.userName });
    console.log(user);
    if (user == null) {
      // NOt found
      return res.status(404).json({ message: "Sorry, user NOT FOUND." });
    }
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};

const getAllUser = async (req, res) => {
  try {
    const user = await UserData.find();
    res.status(200).json(
      user.map((user) => {
        return {
          userId: user._id,
          userName: user.name,
          userPass: user.name,
          age: user.age,
          fbw: user.fbw,
          toolStack: user.toolStack,
          email: user.email,
          userAddedDate: user.userAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/user/${user.userName}`,
          },
        };
      })
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Add new user
const addNewUser = async (req, res) => {
  const user = new userData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    // save
    const newUser = await user.save();
    // 201 for Successful Created
    res.status(201).json(newUser);
  } catch (err) {
    // 400 for Bad request
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  getUser,
  getAllUser,
  addNewUser,
  //   getOneUser,
  //   updateOneUser,
};
