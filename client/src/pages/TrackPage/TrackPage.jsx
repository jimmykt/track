import "./TrackPage.scss";
import React, { useState } from "react";
import axios from "axios";
import { API } from "../../util/api";
import { useSelector } from "react-redux";
import Expenses from "../../components/Expenses/Expenses";

function TrackPage() {
  const User = useSelector((state) => state.User);
  const [newExpense, setNewExpense] = useState({
    name: "",
    price: "",
    userId: "",
  });

  const addExpense = (e) => {
    e.preventDefault();
    setNewExpense({ ...newExpense, userId: User._id });
    axios
      .post(API + "/track/expense", newExpense)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="track">
      <h1>monthly expense</h1>
      <form onSubmit={addExpense}>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Expense"
          onChange={(e) =>
            setNewExpense({ ...newExpense, name: e.target.value })
          }
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price"
          onChange={(e) =>
            setNewExpense({ ...newExpense, price: e.target.value })
          }
        />
        <button>Add</button>
      </form>
      <p></p>
      <Expenses />
    </main>
  );
}

export default TrackPage;
