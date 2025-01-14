import mongoose from "mongoose";

const pollModel = new mongoose.Schema({});

const Poll = mongoose.model("Poll", pollModel);
export default Poll;
