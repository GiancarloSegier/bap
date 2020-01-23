const Job = require("../models/job.model.js");

exports.findAll = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (err) {
    res.status(500).send({ err: err.job || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.jobId
    });
    if (job) {
      res.send(job);
    } else {
      res.status(404).send("No job found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
