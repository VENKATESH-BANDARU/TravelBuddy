const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ratingModel = new Schema(
  {
    rating: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    providerId: {
      type: ObjectId,
      default: null,
    },
    serviceId: {
      type: ObjectId,
      default: null,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("Rating", ratingModel);
