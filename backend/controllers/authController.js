import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

// set cookie
const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

// -------- registration-----------
export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validate if fields are empty

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // check if email is already registered

    const existingEmail = await User.findOne({ email: normalizedEmail });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // hashed password

    const hashedPassword = await bcrypt.hash(password, 10);

    // generate otp 6 digits

    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mints
    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      verifyOTP: otp,
      verifyOTPExpiry: otpExpiry,
    });

    // send email for registration

    await sendEmail({
      to: newUser.email,
      subject: "Verify Your Account",
      message: `Your verification code is ${otp} , it expires in 15 minutes`,
    });

    // success
    return res
      .status(201)

      .json({
        success: true,
        message:
          "User registered successfully.Please check your email for verification.",
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

    // check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({
        message: "Email is not verified. Please verify your email first.",
        isVerified: false,
      });
    }

    // jwt

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // send token in cookie
    res.cookie("token", token, cookieOptions);

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
    res.cookie("token", "", { ...cookieOptions, expires: new Date(0) });
    return res
      .status(200)
      .json({ success: true, message: "Logout successfully" });
  } catch (err) {
    return res.status(500).json({
      message: "Error while logout",
      error: err.message,
    });
  }
};
