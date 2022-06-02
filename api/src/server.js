const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

module.exports.createServer = function () {
  require("dotenv").config();

  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors());

  app.use(function (_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.use(require("./middlewares/error"));

  app.use("", require("./routes"));
  app.use("/api/v1/auth", require("./routes/auth"));
  app.use("/api/v1/manufacturers", require("./routes/manufacturer"));
  app.use("/api/v1/orders", require("./routes/order"));
  app.use("/api/v1/sales", require("./routes/sale"));
  app.use("/api/v1/services", require("./routes/service"));
  app.use("/api/v1/users", require("./routes/user"));
  app.use("/api/v1/vehicles", require("./routes/vehicle"));

  return app;
};
