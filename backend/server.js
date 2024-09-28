import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./DB/DB.connect.js";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import usersRoute from "./routes/user.routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/user", usersRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
