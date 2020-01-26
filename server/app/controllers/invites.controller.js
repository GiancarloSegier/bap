const Invite = require("../models/invite.model.js");

exports.create = (req, res) => {
  console.log(req.body);
  const invite = new Invite({
    _id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    committeeId: req.body.committeeId,
    organisation: req.body.organisation,
    job: req.body.job
  });

  invite
    .save()
    .then(invite => res.send(invite))
    .catch(err => {
      res.status(500).send({ error: err.invite || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const invites = await Invite.find();
    res.send(invites);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.invite || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const invite = await Invite.findOne({
      _id: req.params.inviteId
    });
    if (invite) {
      res.send(invite);
    } else {
      res.status(404).send("No invite found");
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
    const invite = await Invite.findOneAndRemove({
      _id: req.params.inviteId
    });
    if (!invite) {
      return res.status(404).send("No invite found");
    }
    res.send(invite);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
