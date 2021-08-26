const userData = require("../model/userModel");
const express = require("express");

// Middleware
// Get one employee by name (only one)
const getUser = async (req, res, next) => {
  let user;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    console.log(employee);
    if (employee == null) {
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
    // console.log(employees);
    res.status(200).json(
      user.map((user) => {
        return {
          userId: user._id,
          userName: user.name,
          userPass: user.name,
          age: user.age,
          fbw: user.fbw,
          toolStack: user.toolstack,
          email: user.email,
          userAddedDate: user.userAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:5000/user/${user.name}`,
          },
        };
      })
    );
  } catch (err) {
    // 500 Internal server error
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getUser,
  getAllUser,
  //   addNewUser,
  //   getOneUser,
  //   updateOneUser,
};
