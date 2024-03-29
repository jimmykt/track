const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = require("./expenseModel.js");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: String,
    email: String,
    password: String,

    Expenses: [expenseSchema],

    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
