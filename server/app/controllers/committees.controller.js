const Committee = require("../models/committee.model.js");

exports.create = (req, res) => {
  const committee = new Committee({
    _id: req.body.id,
    name: req.body.name,
    raceday: req.body.raceday,
    city: req.body.city,
    country: req.body.country,
    description: req.body.description,
    completedTasks: req.body.completedTasks,
    logo: req.body.logo
  });

  committee
    .save()
    .then(committee => res.send(committee))
    .catch(err => {
      res.status(500).send({ error: err.committee || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const committees = await Committee.find();
    res.send(committees);
  } catch (err) {
    res.status(500).send({ err: err.committee || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const committee = await Committee.findOne({
      _id: req.params.committeeId
    });
    if (committee) {
      res.send(committee);
    } else {
      res.status(404).send("No committee found");
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
    const committee = await Committee.findOneAndUpdate(
      {
        _id: req.params.committeeId
      },
      {
        name: req.body.name,
        raceday: req.body.raceday,
        city: req.body.city,
        country: req.body.country,
        description: req.body.description,
        completedTasks: req.body.completedTasks,
        logo: req.body.logo
      },
      {
        new: true
      }
    );

    if (!committee) {
      return res.status(404).send("No committee found");
    }
    res.send(committee);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const committee = await Committee.findOneAndRemove({
      _id: req.params.committeeId
    });
    if (!committee) {
      return res.status(404).send("No committee found");
    }
    res.send(committee);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
