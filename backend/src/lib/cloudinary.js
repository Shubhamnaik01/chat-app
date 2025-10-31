import { v2 as cloudinary } from "cloudinary"; // Cloudinary has a variable called v2 but name is not user-friendly so we use it as cloudinary for importing cloudinary

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
