import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import { v2 as cloudinary } from "cloudinary";

export const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    let { image } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // if (!text && !image) {
    //   return res.status(400).json({ message: "Text or image are required" });
    // }

    if (image) {
      const result = await cloudinary.uploader.upload(image);
      image = result.url;
    }

    const newPost = new Post({
      user: userId,
      text,
      image,
    });

    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", data: { newPost } });
  } catch (error) {
    console.log("error from createPost", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // if (post.user.toString() !== req.user._id.toString()) {
    //   return res
    //     .status(401)
    //     .json({ message: "you are not allowed to delete this post" });
    // }

    if (post.image) {
      const imgId = post.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imgId);
    }

    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log("error from deletePost", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const commentOnPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;

    if (!text) {
      return res.status(400).json({ message: "text is required" });
    }
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    const comment = { user: userId, text };

    post.comments.push(comment);
    await post.save();
    res.status(200).json({ message: "comment added successfully", post });
  } catch (error) {}
};

export const likeUnlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likes.includes(userId)) {
      //unlike
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      //like
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (error) {
    console.log("error from likeUnlikePost", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    res.status(200).json({ posts });
  } catch (error) {
    console.log("error from getPost", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
