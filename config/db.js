const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

console.log(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongo db connected");
  } catch (e) {
    console.log("Error while connecting to db:");
    console.error(e);
    //console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
