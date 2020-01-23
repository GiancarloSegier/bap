module.exports = app => {
  const controller = require("../controllers/jobs.controller.js");
  app.get("/api/jobs", controller.findAll);
  app.get("/api/jobs/:jobId", controller.findOne);
};
