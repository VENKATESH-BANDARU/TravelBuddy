const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const tripsModel = new Schema(
  {
    tripTitle: {
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
    fromPlace: {
      type: String,
      default: null,
    },
    toPlace: {
      type: String,
      default: null,
    },
    tripCompleteDetails: {
      type: String,
      default: null,
    },
    routeMap: {
      type: String,
      default: null,
    },
    tripInchargeName: {
      type: String,
      default: null,
    },
    tripInchargePhoneNumber: {
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
    toursAndTravelId: {
      type: ObjectId,
      ref: "ToursAndTravel",
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
    pickupPointAddress: {
      type: String,
      default: null,
    },
    dropingPointAddress: {
      type: String,
      default: null,
    },
    pickupPointPincode: {
      type: Number,
      default: null,
    },
    dropingPointPincode: {
      type: Number,
      default: null,
    },
    isFoodIncluded: {
      type: Boolean,
      default: false,
    },
    isStayIncluded: {
      type: Boolean,
      default: false,
    },
    foodDetails: {
      type: String,
      default: null,
    },
    stayDetials: {
      type: String,
      default: null,
    },
    noOfDaysTrip: {
      type: Number,
      default: null,
    },
    noOfNightStayDays: {
      type: Number,
      default: null,
    },
    otherDetails: {
      type: String,
      default: null,
    },
    totalTravelers: {
      type: Number,
      default: null,
    },
    noOfVechancies: {
      type: Number,
      default: null,
    },
    isChildAllowed: {
      type: Boolean,
      default: false,
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
    tripPricePerPerson: {
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
    isCompleted: {
      type: Boolean,
      default: false,
    },
    tripFilled: {
      type: Boolean,
      default: false,
    },
    tripStartDate: {
      type: Date,
      default: false,
    },
    tripEndDate: {
      type: Date,
      default: false,
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

module.exports = mongoose.model("ToursAndTrips", tripsModel);
