const express = require("express");
const displayRouter = express.Router();
const UserData = require("../model/userModel");
const { getAllUser, getOneUser } = require("../controllers/userController");
const { getUser } = require("../middleware");
// root route
displayRouter.get(getAllUser);

module.exports = displayRouter;
