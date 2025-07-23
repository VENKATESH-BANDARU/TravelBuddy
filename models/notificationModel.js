const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const notificationModel = new Schema(
  {
    title: {
      type: String,
      default: null,
      trim: true,
    },
    description: {
      type: String,
      default: null,
    },
    recieverId: {
      type: ObjectId,
      default: null,
    },
    senderId: {
      type: ObjectId,
      default: null,
    },
    isAdminSentNotification: {
      type: Boolean,
      default: false,
    },
    ricieverType: {
      type: [Number],
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

module.exports = mongoose.model("Notification", notificationModel);
