const userData = require("../model/userModel");
const express = require("express");

// Middleware
// Get one employee by name (only one)
const getUser = async (req, res, next) => {
  let user;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    user = await UserData.findOne({ userName: req.params.userName });
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
    // const employees = await EmployeesData.find().select("name age");

    const user = await userData.find();
    // 200 for Successful Ok
    // console.log(user);
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
            url: `http://localhost:5000/user/${userName.userName}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
// Add new Employee
const addNewUser = async (req, res) => {
  const user = new UserData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    // save
    const newUser = await userData.save();
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
