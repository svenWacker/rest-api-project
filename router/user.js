const express = require("express");
const userRouter = express.Router();
const UserData = require("../model/userModel");
const {
  getAllUser,
  addNewUser,
  getOneUser,
  updateOneUser,
} = require("../controllers/userController");
// root route
userRouter
  .route("/")
  // GET all user
  .get(getAllUser)
  // add new user
  .post(addNewUser);
// user route
userRouter.route("/:userName").get(getOneUser).patch(updateOneUser);

module.exports = userRouter;
