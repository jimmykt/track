import "./ExpensesTotals.scss";
import { useSelector } from "react-redux";

function ExpensesTotals() {
  const User = useSelector((state) => state.User);

  const totalEpense = () => {
    let Total = 0;
    User.Expenses.forEach((expense) => {
      Total = Total + expense.expensePrice;
    });
    return Total.toFixed(2);
  };

  const totalLeisure = () => {
    let Total = 0;
    User.Expenses.forEach((expense) => {
      if (expense.expenseType == "Leisure") {
        Total = Total + expense.expensePrice;
      }
    });
    return Total.toFixed(2);
  };

  const totalUtility = () => {
    let Total = 0;
    User.Expenses.forEach((expense) => {
      if (expense.expenseType == "Utility") {
        Total = Total + expense.expensePrice;
      }
    });
    return Total.toFixed(2);
  };

  return (
    <div className="ExpensesTotals">
      <h2 className="ExpensesTotals__title">totals: </h2>
      <p className="ExpensesTotals__total">total Leisure: {totalUtility()}</p>
      <p className="ExpensesTotals__total">total Utility: {totalLeisure()}</p>
      <p className="ExpensesTotals__total">total expense: {totalEpense()}</p>
    </div>
  );
}

export default ExpensesTotals;
