const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
      index: true, // indexing for optimized search
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
      trim: true, // remove excess spaces
      minlength: [3, "Username should be at least 3 characters long"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
      minlength: [6, "Password should be at least 6 characters long"],
    },
  },
  { timestamps: true }
);

//hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
