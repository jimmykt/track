import "./ExpensesTotals.scss";
import { useSelector } from "react-redux";

function ExpensesTotals() {
  const User = useSelector((state) => state.User);

  const totalEpense = () => {
    let Total = 0;
    User.Expenses.forEach((expense) => {
      Total = Total + expense.expensePrice;
    });
    return Total;
  };

  const totalUtilityExpense = () => {};

  return (
    <div>
      <p>total expense: {totalEpense()}</p>
    </div>
  );
}

export default ExpensesTotals;
