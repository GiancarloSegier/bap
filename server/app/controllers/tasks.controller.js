const Task = require("../models/task.model.js");

exports.create = (req, res) => {
  const task = new Task({
    title: req.body.title,
    priorityLevel: req.body.priorityLevel,
    period: req.body.period,
    assignees: req.body.assignees
  });

  task
    .save()
    .then(task => res.send(task))
    .catch(err => {
      res.status(500).send({ error: err.task || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (err) {
    res.status(500).send({ err: err.task || "Error" });
  }
};
