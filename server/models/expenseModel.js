const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    expenseName: String,
    expensePrice: Number,
    expenseType: String,
    expenseInfo: String,
  },
  { timestamps: true }
);

module.exports = expenseSchema;
