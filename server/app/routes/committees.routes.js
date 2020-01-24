module.exports = app => {
  const controller = require("../controllers/committees.controller.js");
  app.post("/api/committees", controller.create);
  app.get("/api/committees", controller.findAll);
  app.get("/api/committees/:committeeId", controller.findOne);
  app.put("/api/committees/:committeeId", controller.update);
  app.delete("/api/committees/:committeeId", controller.delete);
};
