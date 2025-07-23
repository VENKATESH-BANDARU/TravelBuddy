const path = require("path");
const mongoose = require(path.resolve("config", "db.js"));
const { Schema } = mongoose;

const providerModel = new Schema({
  title: {
    type: String,
    default: null,
    trim: true,
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
  deletedBy: {
    type: Number,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Provider", providerModel);
