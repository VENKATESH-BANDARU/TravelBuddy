const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
