const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const request = require("request");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");

require("dotenv").config();

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("db connected"))
  .catch(e => {
    console.log("Error, exiting", e);
    process.exit();
  });

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build/")));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/send-email", (req, res) => {
  //get variables
  const { recipient, country, city, phone, text, id } = req.query;
  console.log(id);

  const msg = {
    to: recipient,
    from: "donotreply@thinkpinkeurope.be",
    templateId: "d-f2d5d418da744ad69f688cae8c790a76",
    dynamic_template_data: {
      text: text,
      country: country,
      city: city,
      phone: phone,
      id: id
    }
  };
  sgMail.send(msg);
});

require("./app/routes/auth.routes.js")(app);
// require("./app/routes/todos.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server luistert op poort ${process.env.PORT}`);
});
