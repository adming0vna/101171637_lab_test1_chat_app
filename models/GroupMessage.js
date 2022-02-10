const mongoose = require("mongoose");

const GroupMessageSchema = new mongoose.Schema({
  from_user: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date_sent: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const GroupMessage = mongoose.model("GroupMessage", GroupMessageSchema);
module.exports = GroupMessage;
