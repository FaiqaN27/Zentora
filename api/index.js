import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/users", userRouter);

app.use(ErrorHandler);

export default app;
