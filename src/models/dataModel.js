const { Schema, model } = require("mongoose");

const userDataModel = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  step_count: {
    type: Number,
  },
  calories_burned: {
    type: Number,
    required: true,
  },
  walk_distance: {
    type: Number,
    required: true,
  },
  heart_rate: {
    type: Number,
    required: true,
  },
  water: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  date: {
    // ! Date
    type: String,
    required: true,
  },
});

module.exports = model("Data", userDataModel);
