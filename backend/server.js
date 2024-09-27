import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./DB/DB.connect.js";
import authRoute from "./routes/auth.routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
