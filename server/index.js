const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");

const cloudinary = require("cloudinary");
const formData = require("express-form-data");

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

// image upload

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN
  })
);

app.use(formData.parse());

app.post("/image-upload", (req, res) => {
  const values = Object.values(req.files);
  const promises = values.map(image => cloudinary.uploader.upload(image.path));
  values.map(image => {
    console.log(image);
  });

  Promise.all(promises).then(results => res.json(results));
});

// visitor sends request to join

app.use(cors());
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.get("/send-request", (req, res) => {
  //get variables
  const { sender, message, name, surname, phone, organisation, id } = req.query;
  console.log(id);
  const superVisor = "giancarlo.segier@student.howest.be";
  const msg = {
    to: superVisor,
    from: sender,
    templateId: "d-f2d5d418da744ad69f688cae8c790a76",
    dynamic_template_data: {
      message: message,
      name: name,
      surname: surname,
      organisation: organisation,
      phone: phone,
      id: id
    }
  };
  sgMail.send(msg);
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/requests.routes.js")(app);
require("./app/routes/jobs.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server luistert op poort ${process.env.PORT}`);
});
