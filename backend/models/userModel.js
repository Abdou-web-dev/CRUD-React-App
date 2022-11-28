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
  if (!validator.isAlpha(fullName)) {
    throw Error("Invalid full name");
  }
  // if (!validator.minLength(fullName)) {
  //   throw Error("Invalid full name");
  // }

  if (!gender) {
    throw Error("Please, select your gender ");
  }
  if (!country) {
    throw Error("Please, select a country ");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  if (
    !validator.matches(
      password,
      // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/
    )
  ) {
    throw Error(
      "Password must include one lowercase character, one uppercase character, a number, and a special character and have a minimum length of 8 characters"
    );
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
  if (!email) {
    throw Error("Please , type your email address");
  }
  if (!fullName) {
    throw Error("Please , type your full name");
  }
  if (!password) {
    throw Error("Please , type your password");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  let match = await bcrypt.compare(password, user.password); //a boolean variable
  let correctPassword = match;
  let correctFullName = fullName === user.fullName; //a boolean variable

  if (!correctPassword) {
    throw Error("Incorrect password");
  }
  if (!correctFullName) {
    throw Error(
      "This is not the full name you entered when you first registered"
    );
  }
  if (user && correctPassword && correctFullName) {
    return user;
  }

  // return user;
};

module.exports = mongoose.model("User", userSchema);

//user.fullName is the fullName entered while the user logges in
//fullName is the fullName entered while the user signed up

// Data types allowed in schemas
// String.
// Number.
// Date.
// Boolean.
// Buffer.
// ObjectId.
// Mixed.
// Array.
