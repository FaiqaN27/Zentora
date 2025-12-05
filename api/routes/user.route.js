import express from "express";
import { upload } from "../middlewares/multer.cloudinary.js";
import {
  handleRegisterUser,
  handleUserAccoutActivation,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), handleRegisterUser);
router.post("/activate", handleUserAccoutActivation);

export default router;
