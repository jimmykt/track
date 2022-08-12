const User = require("../models/usersModel");
const expense = require("../models/expenseModel");

module.exports.addExpense = async (req, res) => {
  const { name, price, userId, type } = req.body;
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
  });
};

module.exports.deleteExpense = async (req, res) => {
  const { userID, expenseID } = req.body;
  await User.findOneAndUpdate(
    {
      _id: userID,
    },
    { $pull: { Expense: { _id: expenseID } } }
  );

  res.json({ Deleted: userID });
};
