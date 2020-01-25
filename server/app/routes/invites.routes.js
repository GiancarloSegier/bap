module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/invites.controller.js");
  app.post("/api/invites", controller.create);
  app.get("/api/invites", controller.findAll);
  app.get("/api/invites/:inviteId", controller.findOne);
  app.delete("/api/invites/:inviteId", controller.delete);
};
