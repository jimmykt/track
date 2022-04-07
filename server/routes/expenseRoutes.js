const express = require("express");
const router = express.Router();

const controller = require("../controllers/expenseController");

router.post("/expense", controller.addExpense);

module.exports = router;
