import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    let token;

    if (req.headers.cookie?.split("=")[1]) {
      token = req.headers.cookie.split("=")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Please log in" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "session expired" });
    }

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(401).json({ message: "Please log in first" });
    }

    req.user = currentUser;

    console.log(currentUser);

    next();
  } catch (error) {
    console.log("error from protectedRoute", error);
    res.status(500).json({ message: "error from protectedRoute" });
  }
};
