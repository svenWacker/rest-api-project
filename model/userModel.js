const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "Name is must"],
    unique: true,
  },
  userPass: {
    type: String,
    trim: true,
    required: [true, "PW is must"],
  },
  age: {
    type: Number,
    required: [true, "Write age please"],
  },
  fbw: {
    type: Number,
    required: [true, "Your course is must"],
  },
  toolStack: {
    type: Array,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  userAddedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
// create new collection
module.exports = mongoose.model("userData", userDataSchema);
