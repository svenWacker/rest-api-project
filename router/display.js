const express = require("express");
const displayRouter = express.Router();
const UserData = require("../model/userModel");
const { getAllUser, getOneUser } = require("../controllers/userController");
const { getUser } = require("../middleware");
// root route
displayRouter.get("/", (req, res) => {
  res.status(200).json({ message: "display area" });
});
displayRouter.route("/:userName").get(getUser, getOneUser);
module.exports = displayRouter;
