import express from "express";
import dotenv from "dotenv";
import ErrorHandler from "./utils/ErrorHandler";
dotenv.config();
const app = express();

app.use(ErrorHandler);

export default app;
