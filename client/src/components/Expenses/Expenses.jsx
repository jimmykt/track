import { useSelector } from "react-redux";

function Expenses() {
  const User = useSelector((state) => state.User);
  const Expenses = useSelector((state) => state.User.Expenses);

  console.log(Expenses);
  console.log(User);

  return <div className="Expenses"></div>;
}

export default Expenses;
