const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: "string",
      required: true,
      minLength: [2, "Name must be at least 2 characters"],
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    lastName: {
      type: "string",
      required: true,
      minLength: [2, "Name must be at least 2 characters"],
      maxlength: [20, "Name cannot be more than 20 characters"],
    },
    email: {
      type: "string",
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
    joined: {
      type: "string",
      default: "",
    },
    rating: {
      type: "Number",
      default: 0,
    },
    userType: {
      type: String,
      enum: ["admin", "user", "guest"],
      default: "user",
    },
    profilePicture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      default: "6482f1008f345bb1607b3354",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.verfiyPasswords = function (password) {
  console.log("verifying password: ", password);
  console.log("verifying password: ", this.password);
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
