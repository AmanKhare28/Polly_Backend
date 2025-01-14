import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Poll from "./poll.model.js";

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "username already exists"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "account already exists"],
    },
    password: {
      type: String,
      required: true,
    },
    polls: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Poll,
      },
    ],
  },
  { timestamps: true }
);

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

userModel.methods.comparePasswords = async (candidatePassword) => {
  try {
    return await bcrypt.compare(candidatePassword, this.password); // Compare the hashed password with the input
  } catch (err) {
    throw new Error("Password comparison failed");
  }
};

const User = mongoose.model("User", userModel);
export default User;
