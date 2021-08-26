const express = require("express");
const router = express.Router();
const UserData = require("../model/userModel");
const {
  getUser,
  getAllUser,
  addNewUser,
  //   getOneUser,
  //   updateOneUser,
} = require("../controllers/userController");
// root route
router
  .route("/")
  // GET all employees
  .get(getAllUser);
// user route
//   .post(addNewUser);
router
  .route("/user")
  // display all user
  .get(getUser)
  // add new user
  .post(async (req, res) => {
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
      const newUser = await user.save();
      // 201 for Successful Created
      res.status(201).json(newUser);
    } catch (err) {
      // 400 for Bad request
      res.status(400).json({
        message: err.message,
      });
    }
  });
// // userName route
// router
//   .route("/user/:name")
//   // update user from DB
//   .put(getUser, updateAllUserData)
//   // update some user data from DB
//   .patch(getUser, updateOneUser)
//   // display one user
//   .get(getUser, getOneUser);
module.exports = router;
