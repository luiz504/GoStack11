import "dotenv/config";
import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./routes";

import "./database";
import uploadConfig from "./config/upload";
import AppError from "./errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);

// global error handling
app.use(
  (err: Error, resquest: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    if (process.env.NODE_ENV === "development") {
      console.error(err); //eslint-disable-line
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(3333, () => {
  console.log("Server on on Port 3333"); //eslint-disable-line
});
