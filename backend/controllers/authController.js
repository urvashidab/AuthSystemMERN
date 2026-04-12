import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// -------- registration-----------
export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validate if fields are empty

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // email validation

    if (!isValidEmail(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // check if email is already registered

    const existingEmail = await User.findOne({ email: normalizedEmail });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // hashed password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    // success
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while signing up",
      error: err.message,
    });
  }
};

// ---------------login-------------------

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate if fields are empty

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // email validation

    if (!isValidEmail(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // check if email is registered or not

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(404).json({ message: "Email is not registered" });
    }

    // password validation check

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // success
    return res.status(200).json({
      message: "Logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while login",
      error: err.message,
    });
  }
};

// --------------logout---------

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successfully" });
  } catch (err) {
    return res.status(500).json({
      message: "Error while logout",
      error: err.message,
    });
  }
};
