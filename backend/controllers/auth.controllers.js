import { generateTokenAndSetCookie } from "../lib/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { userName, fullName, email, password } = req.body;

    const existingUserName = await User.findOne({ userName });
    const existingEmail = await User.findOne({ email });

    if (existingUserName) {
      res.status(400).json({ message: "Username already exists" });
    }
    if (existingEmail) {
      res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        status: "success",
        newUser,
      });
    }
  } catch (error) {
    console.log("error from signUp", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const existingUser = await User.findOne({ userName });
    const isMatch = await bcrypt.compare(
      password,
      existingUser?.password || ""
    );

    if (!existingUser || !isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(existingUser._id, res);

    res.status(200).json({
      status: "success",
      existingUser,
    });
  } catch (error) {
    console.log("error from login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("error from logout", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
