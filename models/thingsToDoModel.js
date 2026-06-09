const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const thingsToDoModel = new Schema(
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
    images: {
      type: [String],
      default: null,
    },
    defaultImage: {
      type: String,
      default: null,
    },
    video: {
      type: String,
      default: null,
    },
    displayOrder: {
      type: Number,
      default: null,
    },
    palceType: {
      type: ObjectId,
      ref: "Places",
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

module.exports = mongoose.model("ThingsToDo", thingsToDoModel);
