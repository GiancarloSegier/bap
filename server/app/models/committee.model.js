const mongoose = require("mongoose");

const CommitteeSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.ObjectId,
    name: String,
    raceday: Date,
    city: String,
    country: String,
    description: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Committee", CommitteeSchema);
