const { Schema, model } = require("mongoose");

const userModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});

module.exports = model("User", userModel);