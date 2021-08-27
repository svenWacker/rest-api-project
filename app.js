const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
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
// http:localhost:5000/user
const userRouter = require("./router/user");
app.use("/user", userRouter);
const displayRouter = require("./router/user");
app.use("/display", displayRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our user-app");
});

module.exports = app;
