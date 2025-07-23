const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const chattingModel = new Schema(
  {
    message: {
      type: String,
      default: null,
      trim: true,
    },
    recieverId: {
      type: ObjectId,
      default: null,
    },
    senderId: {
      type: ObjectId,
      default: null,
    },
    sentType: {
      type: Number,
      default: null,
    },
    messageType: {
      type: Number,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    video: {
      type: String,
      default: null,
    },
    seenStatus: {
      type: Boolean,
      default: false,
    },
    sentTime: {
      type: Date,
      default: null,
    },
    viewedTime: {
      type: Date,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedBy: {
      type: Number,
      default: null,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chatting", chattingModel);
