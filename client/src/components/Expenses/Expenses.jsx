import "./Expenses.scss";

import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import Expense from "./Expense";
import ExpensesTotals from "./ExpensesTotals";
import SortIcon from "../../assets/images/sort.png";

function Expenses() {
  const User = useSelector((state) => state.User);
  const [Expenses, setExpenses] = useState(() => {
    return User.Expenses;
  });
  const [sort, setSort] = useState(false);

  useEffect(() => {});

  const sortByName = () => {
    let sorted = Expenses;
    sorted.sort(function (a, b) {
      let nameA = a.expenseName.toUpperCase();
      let nameB = b.expenseName.toUpperCase();
      if (sort) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      }
    });
    setExpenses(sorted);
    setSort(!sort);
  };

  const sortByPrice = () => {
    let sorted = Expenses;
    sorted.sort(function (a, b) {
      if (sort) {
        if (a.expensePrice < b.expensePrice) {
          return -1;
        }
        if (a.expensePrice > b.expensePrice) {
          return 1;
        }
        return 0;
      } else {
        if (a.expensePrice > b.expensePrice) {
          return -1;
        }
        if (a.expensePrice < b.expensePrice) {
          return 1;
        }
      }
    });
    setExpenses(sorted);
    setSort(!sort);
  };

  const sortByType = () => {
    let sorted = Expenses;
    sorted.sort(function (a, b) {
      if (sort) {
        if (a.expenseType < b.expenseType) {
          return -1;
        }
        if (a.expenseType > b.expenseType) {
          return 1;
        }
        return 0;
      } else {
        if (a.expenseType > b.expenseType) {
          return -1;
        }
        if (a.expenseType < b.expenseType) {
          return 1;
        }
      }
    });
    setExpenses(sorted);
    setSort(!sort);
  };
  if (User) {
    return (
      <div className="expenses">
        <ExpensesTotals />

        <div className="expenses__titles">
          <div className="expenses__title-container">
            <h2 className="expenses__title ">Expense</h2>
            <img
              className="sortIcon expenses__sort"
              src={SortIcon}
              onClick={sortByName}
              alt="sort icon"
            />
          </div>
          <div className="expenses__title-container">
            <h2 className="expenses__title expenses__title--price">Price</h2>
            <img
              className="sortIcon expenses__sort"
              src={SortIcon}
              onClick={sortByPrice}
              alt="sort icon"
            />
          </div>
          <div className="expenses__title-container">
            <h2 className="expenses__title expenses__title--type">Type</h2>
            <img
              className="sortIcon expenses__sort"
              src={SortIcon}
              onClick={sortByType}
              alt="sort icon"
            />
          </div>
        </div>
        {Expenses.map((item) => (
          <Expense key={item._id} item={item} userID={User._id} />
        ))}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Expenses;
