const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeTypesModel = new Schema(
  {
    placeName: {
      type: String,
      default: null,
      trim: true,
    },
    placeType: {
      type: Number,
      default: null,
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

module.exports = mongoose.model("PlaceTypes", placeTypesModel);
