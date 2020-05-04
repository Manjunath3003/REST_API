const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscriberweb: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Subscribers", subscriberSchema);
