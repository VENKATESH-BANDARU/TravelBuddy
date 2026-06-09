const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { applyBaseTransform } = require("../utilities/index");

const roleModel = new Schema(
  {
    roleName: {
      type: String,
      default: null,
      trim: true,
    },
    displayType: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: null,
      trim: true,
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

applyBaseTransform(roleModel);

module.exports = mongoose.model("Role", roleModel);
