const express = require("express");
const router = express.Router();
const tokenValidator = require("./../middlewares/tokenValidator");

const {
  getAchievement,
  getData,
  postData,
} = require("../controllers/userDataController");
const { route } = require("./userRoutes");

router.use(tokenValidator);

router.get("/achievement", getAchievement);
router.get("/data", getData);
router.post("/data", postData);

module.exports = route;
