const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const privacyAndPoliciesModel = new Schema(
  {
    title: {
      type: String,
      default: null,
      trim: true,
    },
    description: {
      type: String,
      default: null,
    },
    type: {
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
    isDeletedBy: {
      type: Number,
      default: null,
    },
    isDeletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("PrivacyAndPolicies", privacyAndPoliciesModel);
