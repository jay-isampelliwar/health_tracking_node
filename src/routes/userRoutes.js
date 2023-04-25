const express = require("express");
const router = express.Router();
const tokenValidator = require("./../middlewares/tokenValidator");
const {
  userDetails,
  userLogin,
  userRegistration,
  verifyOTP,
} = require("../controllers/userController");

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.get("/", tokenValidator, userDetails);
router.post("/verify_otp", verifyOTP);

module.exports = router;
