module.exports = app => {
  const controller = require("../controllers/auth.controller.js");
  app.get("/api/users", controller.findAll);
  app.post("/auth/login", controller.login);
  app.post("/auth/logout", controller.logout);
  app.post("/auth/register", controller.register);
};
