const express = require("express");
const router = express.Router();
const {
  userDetails,
  userLogin,
  userRegistration,
} = require("../controllers/userController");

router.post("/registration", userRegistration);
router.post("/login", userLogin);
router.post("/", userDetails);

module.exports = router;
