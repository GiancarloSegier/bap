module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/requests.controller.js");
  app.post("/api/requests", controller.create);
  app.get("/api/requests", controller.findAll);
  app.get("/api/requests/:requestId", controller.findOne);
  app.put("/api/requests/:requestId", controller.update);
  app.delete("/api/requests/:requestId", controller.delete);
};
