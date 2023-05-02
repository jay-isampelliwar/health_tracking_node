const asyncHandler = require("express-async-handler");
const UserData = require("./../models/dataModel");
const Achievement = require("./../models/userAchievementModel");

const getData = asyncHandler(async (req, res) => {
  const data = await UserData.find({ user_id: req.user.id });
  if (!data) {
    res.status(404);
    throw new Error("You don't have data");
  }

  return res.json({ status: true, message: "Data", data: data });
});
const getAchievement = asyncHandler(async (req, res) => {
  const achievements = await Achievement.findOne({ user_id: req.user.id });

  if (!achievements) {
    return res.json({
      status: false,
      message: "You don't have amy achievement yet",
      data: achievements,
    });
  }

  return res.json({ status: true, message: "Achievement", data: achievements });
});
const postData = asyncHandler(async (req, res) => {
  const {
    step_count,
    calories_burned,
    walk_distance,
    heart_rate,
    water,
    points,
    date,
  } = req.body;

  const newData = new UserData({
    user_id: req.user.id,
    step_count,
    calories_burned,
    walk_distance,
    water,
    points,
    date,
    heart_rate,
  });

  await newData.save();

  return res.json({
    status: true,
    message: "Data is uploaded",
    data: newData,
  });
});
const postAchievement = asyncHandler(async (req, res) => {
  const {
    highest_point,
    highest_distance,
    highest_water,
    highest_step_count,
    highest_calorie_burned,
  } = req.body;

  const achievement = await Achievement.findOne({ user_id: req.user.id });

  if (!achievement) {
    const newAchievement = new Achievement({
      user_id: req.user.id,
      highest_point,
      highest_water,
      highest_step_count,
      highest_distance,
      highest_calorie_burned,
    });

    await newAchievement.save();

    return res.json({
      status: true,
      message: "Achievement Created",
      data: newAchievement,
    });
  }

  if (highest_point.value > achievement.highest_point.value) {
    achievement.highest_point.value = highest_point.value;
    achievement.highest_point.date = highest_point.date;
  }
  if (highest_distance.value > achievement.highest_distance.value) {
    achievement.highest_distance.value = highest_distance.value;
    achievement.highest_distance.date = highest_distance.date;
  }
  if (highest_calorie_burned.value > achievement.highest_calorie_burned.value) {
    achievement.highest_calorie_burned.value = highest_calorie_burned.value;
    achievement.highest_calorie_burned.date = highest_calorie_burned.date;
  }
  if (highest_water.value > achievement.highest_water.value) {
    achievement.highest_water.value = highest_water.value;
    achievement.highest_water.date = highest_water.date;
  }
  if (highest_step_count.value > achievement.highest_step_count.value) {
    achievement.highest_step_count.value = highest_step_count.value;
    achievement.highest_step_count.date = highest_step_count.date;
  }

  await achievement.save();

  return res.json({
    status: true,
    message: "Achievement Updated",
    data: achievement,
  });
});

module.exports = { getData, getAchievement, postData, postAchievement };
