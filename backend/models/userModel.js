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
  // this regEx method str.replace(/\s*/g,"") allows to ignore whitespaces on strings
  //because isAlpha validator method does not allow white spaces in strings
  if (!validator.isAlpha(fullName.replace(/\s*/g, ""))) {
    throw Error("Invalid full name"); //resolve space problem
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

  if (
    !validator.matches(
      password,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/
      //this is a regex to verify that a pwd is strong
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
      "This is not the full name you entered when you first registered, check if you typed an extra white space"
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

// ***************************

// let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]$/;
//   let regEmail = /^[a-zA-Z0-9]+@[gmail]+\.[com]$/;
//   if (!regEmail.test(email)) {
//     // return "Invalid Email";
//     throw Error("The email you entered is not valid");
//   }

//   end*****
//   if (
//     !validator.matches(
//       email,
//       /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+/
//       //this is a regex to verify that an email is valid
//     )
//   ) {
//     throw Error("The email you entered is not valid");
//   }
