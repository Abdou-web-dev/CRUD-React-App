const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  fullName,
  gender,
  country
) {
  // validation
  if (!email && !password && !fullName && !gender && !country) {
    throw Error("Please, fill in the fields before subscribing ");
  }
  if (!email) {
    throw Error("Please, type your email address ");
  }
  if (!password) {
    throw Error("Please, type your password ");
  }
  if (!fullName) {
    throw Error("Please, type your full name ");
  }
  if (!gender) {
    throw Error("Please, select your gender ");
  }
  if (!country) {
    throw Error("Please, select a country ");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    fullName,
    gender,
    country,
    password: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password, fullName) {
  if (!email || !password || !fullName) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  if (fullName !== user.fullName) {
    throw Error(
      "This is not the full name you enetered when you first registered"
    );
  }
  if (fullName === user.fullName) {
    return user;
  }
  //user.fullName is the fullName entered while the user logges in
  //fullName is the fullName entered while the user signed up

  // return user;
};

module.exports = mongoose.model("User", userSchema);

// Data types allowed in schemas
// String.
// Number.
// Date.
// Boolean.
// Buffer.
// ObjectId.
// Mixed.
// Array.
