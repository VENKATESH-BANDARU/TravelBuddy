const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const paymentModel = new Schema(
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
    status: {
      // payment status
      type: Number,
      enum: [],
      default: null,
    },
    paymentMode: {
      // type of payment mode
      type: Number,
      enum: [],
      default: null,
    },
    amount: {
      type: Number,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Payment", paymentModel);
