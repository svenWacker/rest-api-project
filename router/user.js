const express = require("express");
const userRouter = express.Router();
const UserData = require("../model/userModel");
const { getUser, validateAge, validateFBW } = require("../middleware");
const {
  getAllUser,
  addNewUser,
  updateOneUser,
} = require("../controllers/userController");
// root route
userRouter
  .route("/")
  .get(getAllUser)
  .post(validateAge, validateFBW, addNewUser);
userRouter
  .route("/:name")
  .put(getUser, updateOneUser)
  .patch(getUser, updateOneUser);

module.exports = userRouter;
