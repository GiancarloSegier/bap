const Request = require("../models/request.model.js");

exports.create = (req, res) => {
  const request = new Request({
    name: req.body.name,
    surname: req.body.surname,
    organisation: req.body.organisation,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message
  });

  request
    .save()
    .then(request => res.send(request))
    .catch(err => {
      res.status(500).send({ error: err.request || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const requests = await Request.find();
    res.send(requests);
  } catch (err) {
    res.status(500).send({ err: err.request || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const request = await Request.findOne({
      _id: req.params.requestId
    });
    if (request) {
      res.send(request);
    } else {
      res.status(404).send("No request found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const request = await Request.findOneAndRemove({
      _id: req.params.requestId
    });
    if (!request) {
      return res.status(404).send("No request found");
    }
    res.send(request);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
