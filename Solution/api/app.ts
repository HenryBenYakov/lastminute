import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { config } from "./config";
import { router } from "./router";

const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);

// JSON parse the request body
app.use(express.json());

app.use("/api/flights", router);

app.listen(config.port, () => {
  console.log(`Listening on ${config.port}`);
});
