import "./Expenses.scss";

import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import Expense from "./Expense";
import ExpensesTotals from "./ExpensesTotals";

function Expenses() {
  const User = useSelector((state) => state.User);
  const { Expenses: exepenseItems } = User;

  const [Expenses, setExpenses] = useState();

  useEffect(() => {});

  if (User) {
    return (
      <div className="expenses">
        <div className="expenses__titles">
          <h2 className="expenses__title ">Expense</h2>
          <h2 className="expenses__title expenses__title--price">Price</h2>
          <h2 className="expenses__title expenses__title--type">Type</h2>
        </div>
        {exepenseItems.map((item) => (
          <Expense key={item._id} item={item} userID={User._id} />
        ))}
        <ExpensesTotals />
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Expenses;
