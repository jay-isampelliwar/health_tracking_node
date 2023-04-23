const { Schema, model } = require("mongoose");

const userAchievementModel = new Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  newUser: {
    type: Object,
    required: true,
  },
});

module.exports = model("Achievement", userAchievementModel);
