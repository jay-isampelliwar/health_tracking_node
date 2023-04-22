const asyncHandler = require("express-async-handler");

const userRegistration = asyncHandler(async (req, res) => {});
const userLogin = asyncHandler(async (req, res) => {});
const userDetails = asyncHandler(async (req, res) => {});

module.exports = { userRegistration, userLogin, userDetails };
