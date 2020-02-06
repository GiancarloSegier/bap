const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    period: String,
    assignees: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", TaskSchema);
