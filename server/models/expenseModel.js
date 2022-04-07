const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  expenseName: String,
  expensePrice: String,
});

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = expenseSchema;
