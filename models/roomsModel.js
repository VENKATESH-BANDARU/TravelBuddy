const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const roomsModel = new Schema(
  {
    roomNo: {
      type: String,
      default: null,
    },
    placeId: {
      type: ObjectId,
      ref: "Places",
      default: null,
    },
    placeIncludedId: {
      // if starting point is other place but covering this place
      type: ObjectId,
      ref: "Places",
      default: null,
    },
    hotelInchargeName: {
      type: String,
      default: null,
    },
    hotelInchargePhoneNumber: {
      type: String,
      default: null,
    },
    images: {
      type: [String],
      default: [],
    },
    defaultImage: {
      type: String,
      default: null,
    },
    video: {
      type: String,
      default: null,
    },
    hostelId: {
      type: ObjectId,
      ref: "Hotel",
      default: null,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    contact_Email: {
      type: String,
      default: null,
    },
    contact_PhoneNumber: {
      type: String,
      default: null,
    },
    alternateNumber: {
      type: String,
      default: null,
    },
    pincode: {
      type: Number,
      default: null,
    },
    isFoodIncluded: {
      type: Boolean,
      default: false,
    },
    foodDetails: {
      type: String,
      default: null,
    },
    dayWise: {
      type: Boolean,
      default: true,
    },
    timeWise: {
      type: Boolean,
      default: false,
    },
    otherDetails: {
      type: String,
      default: null,
    },
    roomType: {
      type: Number,
      default: null,
    },
    NoofPersonsInRoom: {
      type: Number,
      default: null,
    },
    isParkingIncluded: {
      type: Boolean,
      default: true,
    },
    isChildAllowed: {
      type: Boolean,
      default: false,
    },
    chiledAgeUnder: {
      type: Number,
      default: null,
    },
    minAge: {
      type: Number,
      default: null,
    },
    maxAge: {
      type: Number,
      default: null,
    },
    conditionIfAny: {
      type: String,
      default: null,
    },
    carringsIfAny: {
      type: String,
      default: null,
    },
    roomPrice: {
      type: Number,
      default: null,
    },
    discountPrice: {
      type: Number,
      default: null,
    },
    finalPrice: {
      type: Number,
      default: null,
    },
    isGenderRestriction: {
      type: Boolean,
      default: false,
    },
    genderIncluded: {
      type: [Number],
      default: [],
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
    Timestamp: true,
  }
);

module.exports = mongoose.model("Rooms", roomsModel);
