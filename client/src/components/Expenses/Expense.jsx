function Expense({ item }) {
  return (
    <div className="Expenses">
      <p>{item.expenseName}</p>
      <p>{item.expensePrice}</p>
    </div>
  );
}

export default Expense;
