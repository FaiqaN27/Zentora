import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(ErrorHandler);

export default app;
