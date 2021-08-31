const express = require("express");
const userRouter = express.Router();
const UserData = require("../model/userModel");
const { getUser } = require("../middleware");
const {
  getAllUser,
  addNewUser,
  updateOneUser,
} = require("../controllers/userController");
// root route
userRouter.route("/").get(getAllUser).post(addNewUser);
userRouter
  .route("/:userName")
  .put(getUser, updateOneUser)
  .patch(getUser, updateOneUser);

module.exports = userRouter;
