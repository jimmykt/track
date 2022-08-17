const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.find({ email: email }, (err, foundUser) => {
    // checks if email exists
    if (foundUser.length === 0) {
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
      res.status(400).json("Email Already In Use");
    }
  });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, foundUser) => {
    if (!foundUser) {
      return res.status(400).json("Invalid Username");
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        password,
        foundUser.password
      );
      if (!isPasswordCorrect) return res.status(400).json("Invalid password");

      const user = {
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
      };

      const token = jwt.sign(user, process.env.JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ auth: true, token: token, user: user });
    }
  });
};

module.exports.getCurrentUser = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authToken = req.headers.authorization.split(" ")[1];

  jwt.verify(authToken, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send("Invalid auth token");
    }
    User.findOne({ email: decoded.email }, (err, foundUser) => {
      res.json(foundUser);
    });
  });
};
