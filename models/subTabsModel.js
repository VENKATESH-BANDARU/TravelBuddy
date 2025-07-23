const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const subTabModel = new Schema(
  {
    tabName: {
      type: String,
      default: null,
      trim: true,
    },
    parentId: {
      type: ObjectId,
      ref: "Tabs",
      default: null,
    },
    displayOrder: {
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

module.exports = mongoose.model("SubTabs", subTabModel);
