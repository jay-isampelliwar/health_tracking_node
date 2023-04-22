const asyncHandler = require("express-async-handler");
const userDataModel = require("./../models/dataModel");
const userAchievementModel = require("./../models/userAchievementModel");

const getData = asyncHandler(async (req, res) => {});
const getAchievement = asyncHandler(async(req, (res) => {}));

module.exports = { getData, getAchievement };
