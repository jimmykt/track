import "./Expense.scss";
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="expense">
      <p className="expense__title expense__title--expense">
        {item.expenseName}
      </p>
      <p className="expense__title expense__title--price">
        {item.expensePrice}
      </p>
      <p className="expense__title expense__title--type">{item.expenseType}</p>
      <img
        className="expense__delete-image"
        src={require("../../assets/images/trash-can.png")}
        alt="trash can"
        onClick={deleteExpense}
      />
    </div>
  );
}

export default Expense;
