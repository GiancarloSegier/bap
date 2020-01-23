const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    assignment: String,
    privileges: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Job", JobSchema);
