module.exports = app => {
  const controller = require("../controllers/auth.controller.js");
  app.get("/api/users", controller.findAll);
  app.post("/auth/login", controller.login);
  app.post("/auth/logout", controller.logout);
  app.post("/auth/register", controller.register);
  app.get("/api/users/:userId", controller.findOne);
  app.put("/api/users/:userId", controller.update);
  app.delete("/api/users/:userId", controller.delete);
};
