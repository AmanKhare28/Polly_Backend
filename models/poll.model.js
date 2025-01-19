import mongoose from "mongoose";
import User from "./user.model.js";

const pollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    options: [
      {
        option: {
          type: String,
        },
        votes: {
          type: Number,
          default: 0,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Poll = mongoose.model("Poll", pollSchema);
export default Poll;
