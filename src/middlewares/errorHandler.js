const { constants } = require("./../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        status: false,
        message: `Not Found, ${err.message}`,
        data: null,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        status: false,
        message: `Forbidden, ${err.message}`,
        data: null,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        status: false,
        message: `Internal Server Error, ${err.message}`,
        data: null,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        status: false,
        message: `Unauthorized, ${err.message}`,
        data: null,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        status: false,
        message: `Validation Error, ${err.message}`,
        data: null,
      });
      break;
    default:
      console.log("Everything in good");
  }
};

module.exports = errorHandler;
