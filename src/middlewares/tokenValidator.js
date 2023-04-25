const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const tokenValidator = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
      if (err) {
        res.status(401);
        throw new Error("Unauthorize User");
      } else {
        req.user = data.user;
        next();
      }
    });
  } else {
    res.status(404);
    throw new Error("Unauthorize User OR Token not provided");
  }
});

module.exports = tokenValidator;
