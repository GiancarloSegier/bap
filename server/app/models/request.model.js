const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema(
  {
    name: String,
    surname: String,
    organisation: String,
    phone: String,
    email: String,
    message: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Request", RequestSchema);
