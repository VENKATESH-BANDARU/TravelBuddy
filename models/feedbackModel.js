const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const feedbackModel = new Schema(
  {
    feedback: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    senderId: {
      type: ObjectId,
      default: null,
    },
    regardingId: {
      type: ObjectId,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackModel);
