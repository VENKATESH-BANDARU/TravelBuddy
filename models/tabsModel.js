const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { applyBaseTransform } = require("../utilities/index");

const tabModel = new Schema(
  {
    tabName: {
      type: String,
      default: null,
      trim: true,
    },
    displayName: {
      type: String,
      default: null,
      trim: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId, //tabId for drop down pages on side bar
      default: null,
    },
    displayType: {
      type: Number,
      default: null,
    },
    displayOrder: {
      type: Number,
      default: null,
    },
    webPageRoute: {
      type: String,
      default: null,
      trim: true,
    },
    addWebpage: {
      type: String,
      default: null,
      trim: true,
    },
    iconName: {
      type: String,
      default: null,
      trim: true,
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

applyBaseTransform(tabModel);

module.exports = mongoose.model("Tabs", tabModel);
