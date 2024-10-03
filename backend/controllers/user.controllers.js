import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";

export const getUser = async (req, res) => {
  const { userName } = req.params;

  try {
    const user = await User.findOne({ userName }).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log("error from getUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const followUnfollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id);

    if (id === currentUser._id.toString()) {
      res.status(400).json({ message: "You cannot follow/unfollow yourself" });
    }

    if (!userToModify || !currentUser)
      return res.status(404).json({ message: "User not found" });

    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      //unfollow
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      res.status(200).json({ message: "Unfollowed successfully" });
    } else {
      //follow
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      res.status(200).json({ message: "followed successfully" });
    }
  } catch (error) {
    console.log("error from followUnfollowUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSuggestedUsers = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user._id).select("following");

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const findUsers = await User.find({
      _id: { $nin: currentUser.following, $ne: req.user._id },
    })
      .select("-password")
      .limit(10);

    const suggestedUsers = findUsers.slice(0, 5);

    res.status(200).json({
      status: "success",
      suggestedUsers,
    });
  } catch (error) {
    console.log("error from getSuggestedUsers", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { userName, fullName, currentPassword, newPassword, email, bio, link } =
    req.body;
  let { profileImage, coverImage } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (
      (!newPassword && currentPassword) ||
      (!currentPassword && newPassword)
    ) {
      return res.status(400).json({
        message: "Please provide both current password and new password",
      });
    }

    if (newPassword && currentPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    if (profileImage) {
      if (user.profileImage) {
        await cloudinary.uploader.destroy(
          user.profileImage.split("/").splice(-1)[0]
        );
      }

      const result = await cloudinary.uploader.upload(profileImage);
      profileImage = result.secure_url;
    }

    if (coverImage) {
      if (user.coverImage) {
        await cloudinary.uploader.destroy(
          user.coverImage.split("/").splice(-1)[0]
        );
      }

      const result = await cloudinary.uploader.upload(coverImage);
      coverImage = result.secure_url;
    }

    user.fullName = fullName || user.fullName;
    user.userName = userName || user.userName;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.link = link || user.link;
    user.profilePicture = profileImage || user.profilePicture;
    user.coverImage = coverImage || user.coverImage;

    await user.save();
    user.password = null;

    return res.status(200).json(user);
  } catch (error) {
    console.log("error from updateUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
