const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactusModel = new Schema({
    title: {
        type: String,
        default: null,
        trim: true,
    },
    type: {
        type: Number,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    phoneNumber: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedBy: {
        type: Number,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    },
},{
    Timestamp: true
});

module.exports = mongoose.model("ContactUs", contactusModel);