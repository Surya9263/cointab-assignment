const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://surya:surya123@cluster0.egl1mnc.mongodb.net/cointab",
    () => {
      console.log("connected to DB");
    }
  );
};

module.exports = connect;
