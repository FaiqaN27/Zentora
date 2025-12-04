import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let parentFolder = "Zentora";
    let folderName = "others";
    let formats = ["jpg", "jpeg", "png", "webp"];

    if (file.fieldname === "avatar") {
      folderName = `users`;
    } else if (file.fieldname === "product_img") {
      folderName = "products";
    }

    return {
      folder: `${parentFolder}/${folderName}`,
      allowed_formats: formats,
    };
  },
});

export const upload = multer({ storage });
