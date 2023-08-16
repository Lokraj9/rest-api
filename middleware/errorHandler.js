const { constants } = require("../constants");
const errorHanlder = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_FAILED:
      res.json({
        title: "validation failed",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "forbidded",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      case constants.SERVER_ERROR:
        res.json({
          title: "server error",
          message: err.message,
          stackTrace: err.stack,
        });
      
        default:
            console.log("no error ,all good");
            break;
  }
};
module.exports = errorHanlder;
