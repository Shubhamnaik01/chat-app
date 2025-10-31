// import { text } from "express";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId, // _id is The unique ObjectId automatically created by MongoDB for each document
      ref: "User", // ==/\== Above Tells Mongoose that this field will store that kind of ID and <<<<This line Tells Mongoose which collection that ID came from
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
