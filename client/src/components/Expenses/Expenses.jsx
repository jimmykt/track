import { useSelector } from "react-redux";
import Expense from "./Expense";

function Expenses() {
  const User = useSelector((state) => state.User);

  console.log(User);
  const { firstName, Expense: exepenseItems } = User;
  console.log(exepenseItems);

  return (
    <div className="Expenses">
      {firstName + "hereee"}
      {exepenseItems.map((item) => (
        <Expense key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Expenses;
