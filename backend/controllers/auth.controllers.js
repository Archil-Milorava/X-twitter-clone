import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export const signup = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (error) {
    console.log("error from signup", error);
    res.status(500).json({ message: "error from signup" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ userName }).select("+password");

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(
      password,
      existingUser?.password || ""
    );

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = signToken(existingUser._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only set secure to true in production
      sameSite: "None", // Required for cross-origin cookies
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    console.log("error from login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt")

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("error from logout", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const authCheck = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log("error from authCheck", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
