import express from "express";
import { createUser, login } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/signin", createUser);
userRouter.post("/login", login);