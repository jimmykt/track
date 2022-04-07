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

    Expense: [expenseSchema],

    likeCount: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
