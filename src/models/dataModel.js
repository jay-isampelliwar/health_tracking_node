const { Schema, model } = require("mongoose");

const userDataModel = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stepCount: {
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
    type: Date,
    required: true,
  },

  achievements: {
    highest_point: {
      type: Number,
    },
    highest_point_date: {
      type: Date,
    },
    highest_distance: {
      type: Number,
    },
    highest_distance_date: {
      type: Date,
    },
    highest_water: {
      type: Number,
    },
    highest_water_date: {
      type: Date,
    },
    highest_step_count: {
      type: Number,
    },
    highest_step_count_date: {
      type: Date,
    },
    highest_calorie_burned: {
      type: Number,
    },
    highest_calorie_burned_date: {
      type: Date,
    },
  },
});

module.exports = model("Data", userDataModel);
