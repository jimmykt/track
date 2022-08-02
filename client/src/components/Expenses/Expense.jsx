function Expense() {
  const User = useSelector((state) => state.User);
  console.log(User);

  return <div className="Expenses"></div>;
}

export default Expense;
