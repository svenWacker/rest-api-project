const express = require("express");
const userRouter = express.Router();
const UserData = require("../model/userModel");
const { getUser } = require("../middleware");
const {
  getAllUser,
  addNewUser,
  getOneUser,
  updateOneUser,
} = require("../controllers/userController");
// root route
userRouter.route("/").get(getAllUser).post(addNewUser);
userRouter
  .route("/:userName")
  .get(getUser, getOneUser)
  .patch(getUser, updateOneUser);

module.exports = userRouter;
