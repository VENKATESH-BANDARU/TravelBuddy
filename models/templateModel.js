const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateModel = new Schema(
  {
    templateName: {
      type: String,
      default: null,
      trim: true,
    },
    description: {
      type: String,
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

module.exports = mongoose.model("Template", templateModel);
