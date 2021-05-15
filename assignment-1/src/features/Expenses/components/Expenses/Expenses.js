import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {

  return (
    <div>
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          amount={item.amount}
          date={item.date}
          id={item.id}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Expenses;
