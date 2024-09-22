import express from "express";
import { signup } from "../controllers/auth.controller.js";

const authRoute = express.Router();


authRoute.post("/signup", signup )

authRoute.post("/signin", )

authRoute.post("/signout",)




export default authRoute;