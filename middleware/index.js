const UserData = require("../model/userModel");
const express = require("express");

const getUser = async (req, res, next) => {
  let user;
  try {
    user = await UserData.findOne({ userName: req.params.userName });
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
  let userAge;
  try {
    userAge = await UserData.findOne({
      age: req.params.age,
    });
    if (userAge <= 17) {
      return res.status(404).json({
        message:
          "We can not validate your user. we don't accept pp that are below 18 years of age",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.userAge = userAge;
  next();
};
// is in FBW
const validateFBW = async (req, res, next) => {
  let userAge;
  try {
    userFBW = await UserData.findOne({
      fbw: req.params.fbw,
    });
    if (fbw != "48") {
      return res.status(404).json({
        message:
          "We can not validate your user. They are not a member of FBW48",
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.userAge = userAge;
  next();
};
module.exports = {
  getUser,
  validateAge,
  validateFBW,
};
