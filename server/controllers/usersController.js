const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  User.find({ email: email }, (err, foundUser) => {
    if (err) {
      found = false;
      console.log(err);
      res.send(err);
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
      return;
    } else {
      found = true;
      console.log("---found user --new email required");
    }
  });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) return console.log(err);

    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password);
    if (!isPasswordCorrect) return res.status(400).send("Invalid password");

    const user = {
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
    };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOCKEN_SECRET);

    res.json({ accessToken });
  });
};
