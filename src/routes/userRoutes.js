const express = require("express");
const router = express.Router();
const {
  userDetails,
  userLogin,
  userRegistration,
  verifyOTP,
} = require("../controllers/userController");

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.post("/", userDetails);
router.post("/verify_otp", verifyOTP);

module.exports = router;
