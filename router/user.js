const express = require("express");
const router = express.Router();
const userData = require("../model/userModel");
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
  .post(addNewUser);
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
