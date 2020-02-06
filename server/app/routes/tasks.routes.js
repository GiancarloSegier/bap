module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/tasks.controller.js");
  app.post("/api/tasks", controller.create);
  app.get("/api/tasks", controller.findAll);
};
