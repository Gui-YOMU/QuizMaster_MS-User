import express from "express";
import { createUser, login } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.post("/users/login", login);