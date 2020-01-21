const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const { token, signature } = req.cookies;

  if (!token) {
    res.status(401).send({
      success: false,
      message: "Auth token is not supplied"
    });
  } else {
    jwt.verify(`${token}.${signature}`, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          success: false,
          message: "Token is not valid"
        });
      } else {
        req.authUserId = decoded._id;
        next();
      }
    });
  }
};

module.exports = { checkToken };
