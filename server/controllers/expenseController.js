const User = require("../models/usersModel");
const expense = require("../models/expenseModel");

module.exports.addExpense = async (req, res) => {
  //
  const { name, price, userId, type } = req.body;
  const expense = { name, price, type };

  await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $addToSet: {
        Expense: {
          expenseName: name,
          expensePrice: price,
          expenseType: type,
        },
      },
    }
  );

  User.findOne({ _id: userId }, (err, foundUser) => {
    res.json(foundUser);
    console.log(foundUser);
  });

  // const foundUser = await User.findById(userId);
  // console.log(foundUser);
};
