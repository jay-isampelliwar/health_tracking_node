const { Schema, model } = require("mongoose");

const userAchievementModel = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  highest_point: {
    value: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
    },
  },
  highest_distance: {
    value: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
    },
  },

  highest_water: {
    value: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
    },
  },

  highest_step_count: {
    value: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
    },
  },

  highest_calorie_burned: {
    value: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
    },
  },
});

module.exports = model("Achievement", userAchievementModel);
