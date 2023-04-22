const express = require("express");
const router = express.Router();

const {
  getAchievement,
  getData,
} = require("../controllers/userDataController");
const { route } = require("./userRoutes");

router.get("/achievement", getAchievement);
router.get("/data", getData);

module.exports = route;
