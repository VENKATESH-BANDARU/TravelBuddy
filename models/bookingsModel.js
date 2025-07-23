const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookingModel = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      default: null,
    },
    providerId: {
      // tours and travels, rooms, rentals and restarents
      type: ObjectId,
      default: null,
    },
    packageId: {
      type: ObjectId, // tour package, rooms, rentals and restaurednt offers
      default: null,
    },
    totalAmount: {
      type: Number,
      default: null,
    },
    discountAmount: {
      type: Number,
      default: null,
    },
    amount: {
      type: Number,
      default: null,
    },
    paymentId: {
      type: ObjectId, // paymentModel id
      default: null,
    },
    userAcceptence: {
      type: Number, // all acceptence and reject stages
      enum: [],
    },
    providerAcceptence: {
      type: Number, // all acceptence and reject stages
      enum: [],
    },
    userRejectReason: {
      type: String,
      default: null,
    },
    providerRejectReason: {
      type: String,
      default: null,
    },
    paymentStatus: {
      type: String,
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

module.exports = mongoose.model("Booking", bookingModel);
