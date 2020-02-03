const mongoose = require("mongoose");

const AnnouncementSchema = mongoose.Schema(
  {
    title: String,
    text: String,
    date: Date,
    images: Object,
    attachment: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema);
