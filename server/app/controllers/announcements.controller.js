const Announcement = require("../models/announcement.model.js");

exports.create = (req, res) => {
  const announcement = new Announcement({
    title: req.body.title,
    date: req.body.date,
    text: req.body.text,
    images: req.body.images,
    attachment: req.body.attachment
  });

  announcement
    .save()
    .then(announcement => res.send(announcement))
    .catch(err => {
      res.status(500).send({ error: err.announcement || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.send(announcements);
  } catch (err) {
    res.status(500).send({ err: err.announcement || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const announcement = await Announcement.findOne({
      _id: req.params.id
    });
    if (announcement) {
      res.send(announcement);
    } else {
      res.status(404).send("No announcement found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const announcement = await Announcement.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        title: req.body.title,
        date: req.body.date,
        text: req.body.text,
        images: req.body.images,
        attachment: req.body.attachment
      },
      {
        new: true
      }
    );

    if (!announcement) {
      return res.status(404).send("No announcement found");
    }
    res.send(announcement);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const announcement = await Announcement.findOneAndRemove({
      _id: req.params.id
    });
    if (!announcement) {
      return res.status(404).send("No announcement found");
    }
    res.send(announcement);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
