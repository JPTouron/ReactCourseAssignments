import Expenses from "./features/Expenses/components/Expenses/Expenses";
import NewExpense from "./features/Expenses/components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpense] = useState(getExpenses());

  const onExpenseSubmittedHandler = (newExpense) => {
    setExpense([...expenses, newExpense]);
    console.log("----------------------");
  };

  return (
    <div className="App">
      <NewExpense onExpenseSubmitted={onExpenseSubmittedHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

function getExpenses() {
  return [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
}

export default App;
