const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const { applyBaseTransform } = require("../utilities/index");

const permissionModel = new Schema(
  {
    roleId: {
      type: ObjectId,
      ref: "Role",
      default: null,
    },
    tabId: {
      type: ObjectId,
      ref: "Tabs",
      default: null,
    },
    isView: {
      type: Boolean,
      default: false,
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
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

applyBaseTransform(permissionModel);

module.exports = mongoose.model("Permission", permissionModel);
