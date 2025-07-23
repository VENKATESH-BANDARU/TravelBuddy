const path = require('path');
const mongoose = require(path.resolve('config', 'db.js'));
const Schema = mongoose.Schema;

const userModel = new Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
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
    password: {
        type: String,
        default: null
    },
    DOB: {
        type: String,
        default: null
    },
    gender: {
        type: Number,
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

module.exports = mongoose.model("User", userModel);