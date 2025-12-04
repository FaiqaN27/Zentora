import User from "../models/user.model.js";
import ErrorHandler from "./../utils/ErrorHandler.js";
import cloudinary from "../config/cloudinary.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

export const handleCreateUser = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    let avatarUrl = {};
    if (req.file) {
      const base64Image = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      const uploaded = await cloudinary.uploader.upload(base64Image, {
        folder: "Zentora/users",
      });

      avatarUrl = {
        public_id: uploaded.public_id,
        url: uploaded.secure_url,
      };
    }

    const user = {
      name,
      email,
      password,
      avatar: avatarUrl,
    };

    const activationToken = createActivationToken(user);
    const activationUrl = `${process.env.FRONTEND_URL}/user/activation/${activationToken}`;

    //sending mail
    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        name: user.name,
        activationUrl,
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      });

      res.status(201).json({
        success: true,
        message: `please check your email: ${user.email} to activate your account`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
