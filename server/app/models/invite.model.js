const mongoose = require("mongoose");

const InviteSchema = mongoose.Schema(
  {
    name: String,
    surname: String,
    email: String,
    job: Object,
    committeeId: mongoose.Schema.ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Invite", InviteSchema);
