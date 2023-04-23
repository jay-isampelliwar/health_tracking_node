const { Schema, model } = require("mongoose");

const userAchievementModel = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  highest_point: {
    type: Number,
    default: 0,
  },
  highest_point_date: {
    type: Date,
  },
  highest_distance: {
    type: Number,
    default: 0,
  },
  highest_distance_date: {
    type: Date,
  },
  highest_water: {
    type: Number,
    default: 0,
  },
  highest_water_date: {
    type: Date,
  },
  highest_step_count: {
    type: Number,
    default: 0,
  },
  highest_step_count_date: {
    type: Date,
  },
  highest_calorie_burned: {
    type: Number,
    default: 0,
  },
  highest_calorie_burned_date: {
    type: Date,
  },
});

module.exports = model("Achievement", userAchievementModel);
