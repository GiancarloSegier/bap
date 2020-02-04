const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
  surname: { type: String },
  job: { type: Object },
  phone: { type: String },
  organisation: { type: String, required: false },
  committeeId: { type: mongoose.Schema.ObjectId },
  avatarUrl: { type: String }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, 12, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", UserSchema);
