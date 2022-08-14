const User = require("../models/usersModel");
const expense = require("../models/expenseModel");

module.exports.addExpense = async (req, res) => {
  const { name, price, type, _id } = req.body;
  console.log("name: " + name);
  console.log("price: " + price);
  console.log("type: " + type);
  console.log("_id: " + _id);
  console.log("___________");

  await User.findOneAndUpdate(
    {
      _id,
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
