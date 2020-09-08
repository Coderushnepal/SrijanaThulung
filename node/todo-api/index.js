import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

import routes from "./src/routes";
import logger from "./src/utils/logger";
import genericErrorHandler from "./src/middlewares/genericErrorHandler";
import { PRECONDITION_FAILED } from "http-status-codes";

const appPort = 3000;

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  logger.info(`${method} ${url}`);

  next();
};

const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);

dotenv.config();
console.log("Env:", process.env);

// app.listen(1234, () => {
//   logger.info(`Listening on port  ${appPort} `);
// });

app.listen(appPort, () => {
  console.log(`Listening on port ${appPort}`);
});


