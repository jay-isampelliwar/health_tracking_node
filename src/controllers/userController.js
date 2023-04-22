const asyncHandler = require("express-async-handler");

const userRegistration = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error("New error");
});
const userLogin = asyncHandler(async (req, res) => {});
const userDetails = asyncHandler(async (req, res) => {});

module.exports = { userRegistration, userLogin, userDetails };
