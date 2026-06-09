const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const subscriptionModel = new Schema(
  {
    providerId: {
      type: ObjectId,
      default: null,
    },
    providerType: {
      type: Number,
      default: null,
    },
    subscriptionTypeId: {
      type: ObjectId,
      ref: "SubscriptionType",
      default: null,
    },
    subsrciptionId: {
      type: ObjectId,
      ref: "Subscription",
      default: null,
    },
    subsrciptionStatus: {
      type: Number,
      default: null,
    },
    subscriptionEndDate: {
      type: Date,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Subscription", subscriptionModel);
