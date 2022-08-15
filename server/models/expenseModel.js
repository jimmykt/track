const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema(
  {
    expenseName: String,
    expensePrice: Number,
    expenseType: String,
    expenseInfo: String,
  },
  { timestamps: true }
);

const Expenses = mongoose.model("Expenses", expensesSchema);
module.exports = Expenses;
