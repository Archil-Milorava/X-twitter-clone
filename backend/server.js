import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./DB/DB.connect.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoute from "./routes/auth.routes.js";
import usersRoute from "./routes/user.routes.js";
import postsRoute from "./routes/posts.routes.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
