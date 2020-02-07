const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: String,
    priorityLevel: Number,
    period: Object,
    assignees: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", TaskSchema);
