import "dotenv/config";
import express from "express";
import cors from "cors";

import { userRouter } from "./routers/userRouter.js";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ page: "login" });
});

app.use(userRouter);

app.listen(PORT, (error) => {
  error
    ? console.error(error)
    : console.log(`Connecté avec succcès au serveur localhost:${PORT}.`);
});
