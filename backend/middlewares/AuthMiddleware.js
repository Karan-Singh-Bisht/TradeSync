const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    // Check if token exists in cookies
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token provided." });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // Find the user by the decoded token's user ID
    const user = await User.findById(decoded.id);

    // If user exists, send success response with username
    if (user) {
      return res.status(200).json({ status: true, user: user.username });
    } else {
      return res
        .status(404)
        .json({ status: false, message: "User not found." });
    }
  } catch (err) {
    // Handle token verification errors and other issues
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ status: false, message: "Invalid or expired token." });
    }
    // General error handling
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error." });
  }
};
