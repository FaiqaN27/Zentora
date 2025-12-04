import User from "../models/user.model.js";
import ErrorHandler from "./../utils/ErrorHandler.js";

export const handleCreateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }
    let avatarUrl = "";
    if (req.file) {
      avatarUrl = {
        public_id: req.file.filename,
        url: req.file.path,
      };
    }

    const newUser = await User.create({
      name,
      email,
      password,
      avatar: avatarUrl,
    });

    return res.status(201).json({
      success: true,
      message: "User Created successfully",
      user: newUser,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};
