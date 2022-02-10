const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    trim: true,
    lowercase: true,
    unique: true,
  },
  firstname: {
    type: String,
    trim: true,
    lowercase: true,
  },
  lastname: {
    type: String,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true, 
    minlength: 5,
  },
  createon: {
    type: Date,
    default: Date.now,
  },
});



const User = mongoose.model("User", UserSchema);
module.exports = User;
