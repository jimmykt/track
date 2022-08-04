import { useSelector } from "react-redux";
import Expense from "./Expense";
import "./Expenses.scss";

function Expenses() {
  const User = useSelector((state) => state.User);

  const { Expense: exepenseItems } = User;

  if (User) {
    return (
      <div className="Expenses">
        {exepenseItems.map((item) => (
          <Expense key={item._id} item={item} />
        ))}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default Expenses;
