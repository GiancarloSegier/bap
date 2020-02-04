module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/announcements.controller.js");
  app.post("/api/announcements", controller.create);
  app.get("/api/announcements", controller.findAll);
  app.get("/api/announcements/:announcementId", controller.findOne);
  app.put("/api/announcements/:announcementId", controller.update);
  app.delete("/api/announcements/:announcementId", controller.delete);
};
