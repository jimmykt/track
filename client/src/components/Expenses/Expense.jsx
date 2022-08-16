import "./Expense.scss";
import React, { useState } from "react";
import axios from "axios";
import { API_TRACK } from "../../util/api";

function Expense({ item, userID }) {
  const deleteExpense = () => {
    const expenseID = item._id;
    const toDelete = {
      userID: userID,
      expenseID: expenseID,
    };
    axios
      .delete(API_TRACK + "/expense", { data: toDelete })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        // window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [showMore, setShowMore] = useState(0);
  const shoreMoreClicked = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="expense" onClick={shoreMoreClicked}>
        <p className="expense__title expense__title--expense">
          {item.expenseName}
        </p>
        <p className="expense__title expense__title--price">
          {item.expensePrice}
        </p>
        <p className="expense__title expense__title--type">
          {item.expenseType}
        </p>
      </div>
      <div className={showMore ? "showMore" : "dontShow"}>
        <p className="showMore__createdAt"> added on: {item.createdAt}</p>
        <img
          className="showMore__trash-can-img"
          src={require("../../assets/images/trash-can.png")}
          alt="trash can"
          onClick={deleteExpense}
        />
      </div>
    </div>
  );
}

export default Expense;
