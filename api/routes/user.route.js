import express from "express";
import { upload } from "../middlewares/multer.cloudinary.js";
import { handleCreateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), handleCreateUser);

export default router;
