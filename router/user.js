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
  // GET all user
  .get(getAllUser)
  // add new user
  .post(addNewUser);
// user route
router
  .route("/:userName")
  // get one user
  .get(getUser);
// // userName route
// router.route("/user/:name");
//   // update user from DB
//   .put(getUser, updateAllUserData)
//   // update some user data from DB
//   .patch(getUser, updateOneUser)
//   // display one user
//   .get(getUser, getOneUser);
module.exports = router;
