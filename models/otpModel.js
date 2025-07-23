const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const OTPModel = new Schema(
  {
    otp: {
      type: Number,
      default: null,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Number,
      default: null,
    },
    type: {
      type: Number,
      default: null,
    },
    clientId: {
      type: ObjectId,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("OTP", OTPModel);
