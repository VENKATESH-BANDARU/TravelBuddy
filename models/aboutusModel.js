const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutusModel = new Schema({
    title: {
        type: String,
        default: null,
        trim: true,
    },
    description: {
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

module.exports = mongoose.model("AboutUs", aboutusModel);