const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const wishlistModel = new Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
      default: null,
    },
    placeId: {
      type: ObjectId,
      ref: "Places",
      default: null,
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

module.exports = mongoose.model("Wishlist", wishlistModel);
