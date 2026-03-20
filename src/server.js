import "dotenv/config";
import express from "express";
import cors from "cors";

import { userRouter } from "./routers/userRouter.js";

const USER = process.env.USER;

const APP = express();

APP.use(cors());
APP.use(express.json());

APP.get("/", (req, res) => {
  res.json({ page: "login" });
});

APP.use(userRouter);

APP.listen(USER, (error) => {
  error
    ? console.error(error)
    : console.log(`Connecté avec succès au serveur local ${USER}.`);
});
