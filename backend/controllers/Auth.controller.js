const User = require("../models/userModel");
const asyncHandler = require("../utils/asyncHandler");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = asyncHandler(async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user: { email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
});

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    // Compare password with hashed password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Invalid email or password", success: false });
    }

    // Generate JWT token
    const token = createSecretToken(user._id);

    // Set cookie with secure options
    res.cookie("token", token, {
      httpOnly: true, // ensures the cookie is only accessible by the server
      secure: process.env.NODE_ENV === "production", // only use secure cookies in production
      sameSite: "strict", // prevents CSRF attacks
    });

    // Return success response
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: { email: user.email, username: user.username }, // avoid sending sensitive information
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
