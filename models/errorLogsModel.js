const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const errorLogsModel = new Schema(
  {
    errStack: {
      type: String,
      default: null,
    },
    apiName: {
      type: String,
      default: null,
    },
    requestBody: {
      type: String,
      default: null,
    },
    responseBody: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ErrorLogs", errorLogsModel);
