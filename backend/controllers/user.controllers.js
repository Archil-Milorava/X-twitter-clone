import User from "../models/user.model.js";

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
  try {
    const updateUser = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      updateUser,
    });
  } catch (error) {
    console.log("error from updateUser", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
