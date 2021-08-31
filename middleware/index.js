const UserData = require("../model/userModel");
const express = require("express");

const getUser = async (req, res, next) => {
  let user;
  try {
    user = await UserData.findOne({ userName: req.params.userName });
    console.log(user);
    if (user == null) {
      return res.status(404).json({ message: "Sorry, user NOT FOUND." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
};

// older than 18
const validateAge = async (req, res, next) => {
  next();
};
// is in FBW
const validateFBW = async (req, res, next) => {
  next();
};
module.exports = {
  getUser,
  validateAge,
  validateFBW,
};
