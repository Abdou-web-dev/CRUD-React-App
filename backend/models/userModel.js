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
  avatar: {
    type: Image,
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
  avatar,
  country
) {
  // validation
  if (!email && !password && !fullName && !gender && !avatar && !country) {
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
  if (!avatar) {
    throw Error("Please, select an avatar ");
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
    avatar,
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

  return user;
};

module.exports = mongoose.model("User", userSchema);
