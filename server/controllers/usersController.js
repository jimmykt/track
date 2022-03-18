const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.find({ email: email }, (err, foundUser) => {
    // checks if email exists
    if (foundUser.length === 0) {
      console.log("no one found");
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
      console.log(newUser);
    } else {
      console.log("Email Already In Use");
      res.status(400).send("Email Already In Use");
    }
  });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) return console.log(err);

    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);
    if (!isPasswordCorrect) return res.status(400).json("Invalid password");

    const user = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
    };

    const token = generateAccessToken(user);

    res.json({ token });
  });
};

module.exports.getLoggedUser = async (req, res) => {};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOCKEN_SECRET, {
    expiresIn: "5s",
  });
}
