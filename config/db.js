const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/docker-node-mongo";

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.log(error);
  }
  // mongoose.connect(url, () => {
  //   console.log("Connected to MongoDB");
  // });
};

module.exports = connectDb;
