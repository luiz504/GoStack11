import "dotenv/config";

import express from "express";
import cors from "cors";
import routes from "./routes";

import "./database";

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333, () => {
  console.log("Server on on Port 3333"); //eslint-disable-line
});
