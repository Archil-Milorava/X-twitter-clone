import express  from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import { commentOnPost, createPost, deletePost,  getPosts, likeUnlikePost } from "../controllers/post.controllers.js";

const postsRoute = express.Router();


postsRoute.get("/all", protectedRoute, getPosts)
postsRoute.post("/create", protectedRoute, createPost)
postsRoute.delete("/:id", protectedRoute, deletePost)
postsRoute.post("/comment/:id", protectedRoute, commentOnPost)
postsRoute.post("/like/:id", protectedRoute, likeUnlikePost)




export default postsRoute