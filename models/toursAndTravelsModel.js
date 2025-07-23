const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const toursAndTravelsModel = new Schema(
  {
    toursAndTravelName: {
      type: String,
      default: null,
    },
    ownerName: {
      type: String,
      default: null,
    },
    ownerImage: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      default: null,
    },
    providerType: {
      type: Number,
      default: null,
    },
    images: {
      type: [String],
      default: null,
    },
    defaultImage: {
      type: String,
      default: null,
    },
    video: {
      type: String,
      default: null,
    },
    providerId: {
      type: ObjectId,
      ref: "Provider",
      default: null,
    },
    isApproved: {
      type: Boolean,
      default: false,
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
    email: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    alternateNumber: {
      type: String,
      default: null,
    },
    address1: {
      type: String,
      default: null,
    },
    address2: {
      type: String,
      default: null,
    },
    pincode: {
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

module.exports = mongoose.model("ToursAndTravel", toursAndTravelsModel);
