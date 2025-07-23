const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { applyBaseTransform } = require("../utilities/index");

const configModel = new Schema(
  {
    key: {
      type: String,
      default: null,
      trim: true,
    },
    value: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
      trim: true,
    },
    isActive: {
        type: Boolean,
        default: true
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

applyBaseTransform(configModel);

module.exports = mongoose.model("Config", configModel);
