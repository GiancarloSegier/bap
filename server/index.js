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
  const { recipient, country, city, phone, text } = req.query;

  const msg = {
    to: recipient,
    from: "donotreply@thinkpinkeurope.be",
    subject: "Request is approved!",
    text: text,
    html:
      "<a href='http://127.0.0.1:4000/register'><strong>Open this link to proceed.</strong></a>",
    dynamic_template_data: {
      country: country,
      city: city,
      phone: phone
    }
  };
  sgMail.send(msg).then(msg => console.log(msg));
});

require("./app/routes/auth.routes.js")(app);
// require("./app/routes/todos.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server luistert op poort ${process.env.PORT}`);
});
