import User from "../models/userModel.js";

// get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "name email role isVerified  createdAt isActive",
    );
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({
      totalUsers: users.length,
      users,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to get user's data",
      error: err.message,
    });
  }
};

// get one  user by id

export const getOneUser = async (req, res) => {
  try {
    const userID = req.params.id;

    const user = await User.findById(userID).select(
      "name email createdAt role isActive isVerified",
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      name: user.name,
      email: user.email,
      role: user.role,
      verified: user.isVerified,
      joinedOn: user.createdAt,
      active: user.isActive,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to load data",
      error: err.message,
    });
  }
};

// delete one user

export const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;

    // to check self delete
    if (req.user.id === userID) {
      return res
        .status(400)
        .json({ message: "Admin profile can not be deleted" });
    }
    const user = await User.findByIdAndDelete(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to delete user",
      error: err.message,
    });
  }
};

// toggle active/deactive profile

export const toggleUserStatus = async (req, res) => {
  try {
    const userID = req.params.id;
    // self check
    if (req.user.id === userID) {
      return res.status(400).json({
        message: "Admin profile can not be deactivated",
      });
    }
    // if id not found
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // toggle status
    user.isActive = !user.isActive;
    await user.save();

    return res.status(200).json({
      message: `User is ${user.isActive ? "activated" : "deactivated"} successfully`,
      activeStatus: user.isActive,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to change user status",
      error: err.message,
    });
  }
};
