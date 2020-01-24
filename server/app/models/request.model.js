const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema(
  {
    name: String,
    surname: String,
    organisation: String,
    phone: String,
    email: String,
    message: String,
    pending: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Request", RequestSchema);
