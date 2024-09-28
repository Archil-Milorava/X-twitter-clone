import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controllers.js";
import { protectedRoute } from "../middleware/protectedRoute.js";


const authRoute = express.Router();

authRoute.get("/authCheck", protectedRoute, authCheck);

authRoute.post("/signup", signup);

authRoute.post("/login", login);

authRoute.post("/logout", logout);

export default authRoute;
