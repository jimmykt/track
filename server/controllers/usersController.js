const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  newUser
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.loginUser = async (req, res) => {};
