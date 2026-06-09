const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const videoAndGifModel = new Schema(
  {
    title: {
      type: Number,
      default: null,
    },
    moduleType: {
      type: Number,
      default: null,
    },
    videoType: {
      type: Number,
      default: null,
    },
    path: {
      type: String,
      default: null,
    },
    tabId: {
      type: ObjectId,
      ref: "Tabs",
      default: null,
    },
    subTabId: {
      type: ObjectId,
      ref: "SubTabs",
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
    Timestamp: true,
  }
);

module.exports = mongoose.model("VideoAndGif", videoAndGifModel);
