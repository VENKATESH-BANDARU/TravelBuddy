const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookingLogsModel = new Schema(
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
    bookingId: {
      type: ObjectId,
      ref: "Booking",
      default: null,
    },
    bodyData: {
      type: String,
      default: null,
    },
    responseData: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BookingLogs", bookingLogsModel);
