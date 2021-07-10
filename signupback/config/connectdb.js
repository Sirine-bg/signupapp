
const mongoose = require("mongoose");
const config = require("config");

const connectdb = () => {
  mongoose
    .connect(config.get("MONGO_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(console.log("mongoose is connected"))
    .catch((err) => console.log(err));
};

module.exports = connectdb;