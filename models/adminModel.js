const path = require("path");
const mongoose = require(path.resolve('config', 'db.js'));
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminModel = new Schema(
  {
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    userName: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      default: null,
    },
    DOB: {
      type: String,
      default: null,
    },
    userType: {
      type: Number,
      default: null,
    },
    gender: {
      type: Number,
      default: null,
    },
    parentId: {
      type: ObjectId,
      default: null,
    },
    roleId: {
      type: ObjectId,
      ref: "Role",
      default: null,
    },
    isSuperAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    userIP: {
      type: String,
      default: null,
    },
    token: {
      type: String,
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
    Timestamp: true,
  }
);

module.exports = mongoose.model("Admin", adminModel);
