import "./Expense.scss";

function Expense({ item }) {
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
      />
    </div>
  );
}

export default Expense;
