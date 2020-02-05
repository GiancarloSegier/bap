const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    surname: String,
    organisation: String,
    phone: String,
    email: String,
    message: String,
    job: Object,
    pending: Boolean,
    seen: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Request", RequestSchema);
