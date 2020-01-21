const multer = require("multer");
const upload = multer();

module.exports = app => {
  const controller = require("../controllers/todos.controller.js");
  const { checkToken } = require("../middleware/");
  app.post("/api/index", checkToken, upload.none(), controller.create);
};
