const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const tokenCookie = {
  maxAge: 1800000,
  sameSite: true
};
const signatureCookie = {
  maxAge: 86400000,
  httpOnly: true,
  sameSite: true
};

exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({ err: err.user || "Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ error: "email and password are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send({ error: "incorrect email or password" });
    } else {
      const isPasswordCorrect = await user.validPassword(password);

      if (isPasswordCorrect) {
        const {
          _id,
          name,
          surname,
          email,
          password,
          job,
          phone,
          organisation,
          committeeId,
          avatarUrl
        } = user;
        const token = jwt.sign(
          {
            _id,
            name,
            surname,
            email,
            password,
            job,
            phone,
            organisation,
            committeeId,
            avatarUrl
          },
          process.env.SECRET,
          {
            expiresIn: "24h"
          }
        );
        const parts = token.split(".");
        const signature = parts.splice(2);
        res
          .cookie("token", parts.join("."), tokenCookie)
          .cookie("signature", signature, signatureCookie)
          .sendStatus(200);
      } else {
        res.status(401).send({
          success: false,
          message: "Incorrect email or password"
        });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal error, please try again", error });
  }
};

exports.logout = (req, res) => {
  res
    .clearCookie("token", tokenCookie)
    .clearCookie("signature", signatureCookie)
    .sendStatus(200);
};

exports.register = (req, res) => {
  const {
    name,
    surname,
    email,
    password,
    job,
    phone,
    organisation,
    committeeId,
    avatarUrl
  } = req.body;
  const user = new User({
    name,
    surname,
    email,
    password,
    job,
    phone,
    organisation,
    committeeId,
    avatarUrl
  });
  user.save(err => {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findOneAndRemove({
      _id: req.params.userId
    });
    if (!user) {
      return res.status(404).send("No user found");
    }
    res.send(user);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.userId
    });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send("No user found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
