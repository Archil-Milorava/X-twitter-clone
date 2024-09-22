import User from "../models/user.model.js";

import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists under this email address",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Passwords do not match",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
      fullName,
      userName,
      password: hashedPassword,
      email,
    });

    

    res.status(201).json({
      status: "success",
      data: {
        fullName,
        userName,
        hashedPassword,
      },
    });
  } catch (error) {
    console.log("error from creating user", error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const signin = async (req, res) => {};

export const signout = async (req, res) => {};
