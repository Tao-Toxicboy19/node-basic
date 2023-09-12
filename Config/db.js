const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thewarat19:IQVFuzXm3fMyz8gb@mern-workshop.gnbfgkb.mongodb.net/Nodejs-basic?retryWrites=true&w=majority"
    );
    console.log("Connected Mongodb");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
