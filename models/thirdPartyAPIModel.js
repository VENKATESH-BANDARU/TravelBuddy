const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thirdPartyAPIModel = new Schema(
  {
    serviceName: {
      type: String,
      default: null,
      trim: true,
    },
    api: {
      type: String,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDefault: {
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

module.exports = mongoose.model("thirdPartyAPI", thirdPartyAPIModel);
