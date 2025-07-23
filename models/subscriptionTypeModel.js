const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionTypeModel = new Schema(
  {
    subscriptionName: {
      type: String,
      default: null,
    },
    subscriptionType: {
      type: String,
      default: null,
    },
    subscriptionBenifits: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    takenCount: {
      type: Number,
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

module.exports = mongoose.model("SubscriptionType", subscriptionTypeModel);
