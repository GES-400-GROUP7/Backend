import express from "express";
import logger from "morgan";
import { initEnv } from "./utils/initEnv";

const app = express();
const env = initEnv();

if (env.debug) {
  app.use(logger("dev"));
} else {
  app.use(logger("common"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
