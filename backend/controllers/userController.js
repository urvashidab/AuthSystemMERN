import User from "../models/userModel.js";

export const getUserProfile = async (req, res) => {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID).select(
      "name email createdAt role isVerified",
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: `Welcome ${user.name}`,
      email: user.email,
      role: user.role,
      verified: user.isVerified,
      joinedOn: user.createdAt,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to load data",
      error: err.message,
    });
  }
};
