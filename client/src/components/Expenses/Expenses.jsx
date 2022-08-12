import { useSelector } from "react-redux";
import Expense from "./Expense";
import "./Expenses.scss";

function Expenses() {
  const User = useSelector((state) => state.User);

  const { Expense: exepenseItems } = User;

  if (User) {
    return (
      <div className="expenses">
        <div className="expenses__titles">
          <h2 className="expenses__title">Expense</h2>
          <h2 className="expenses__title">Price</h2>
          <h2 className="expenses__title expenses__title--type">Type</h2>
        </div>
        {exepenseItems.map((item) => (
          <Expense key={item._id} item={item} userID={User._id} />
        ))}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Expenses;
