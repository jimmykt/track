import "./Expense.scss";

function Expense({ item }) {
  return (
    <div className="Expense">
      <p>{item.expenseName}</p>
      <p>{item.expensePrice}</p>
      <p>{item.expenseType}</p>
    </div>
  );
}

export default Expense;
