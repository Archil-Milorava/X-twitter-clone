import express from "express";
import {
  followUnfollowUser,
  getSuggestedUsers,
  getUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { protectedRoute } from "../middleware/protectedRoute.js";

const usersRoute = express.Router();

usersRoute.get("/:userName", getUser);
usersRoute.post("/follow/:id", protectedRoute, followUnfollowUser);
usersRoute.get("/suggestedUsers/:id", protectedRoute, getSuggestedUsers);
usersRoute.post("/updateBio", protectedRoute, updateUser);

export default usersRoute;
