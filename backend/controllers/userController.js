const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    const user = await User.login(email, password, fullName);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token, fullName });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password, fullName, gender, country } = req.body;

  try {
    const user = await User.signup(email, password, fullName, gender, country);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
