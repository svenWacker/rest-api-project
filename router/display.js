const express = require("express");
const displayRouter = express.Router();
const UserData = require("../model/userModel");
const { getAllUser } = require("../controllers/userController");
// root route
displayRouter.get(getAllUser);

module.exports = displayRouter;
