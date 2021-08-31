const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

// mongoDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("userDB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

// http:localhost:5000/
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our user-app");
});

// http:localhost:5000/user
const userRouter = require("./router/user");
app.use("/user", userRouter);

// http:localhost:5000/display
const displayRouter = require("./router/display");
app.use("/display", displayRouter);

module.exports = app;
