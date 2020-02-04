const mongoose = require("mongoose");

const AnnouncementSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    date: Date,
    images: Array,
    attachment: Array,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema);
