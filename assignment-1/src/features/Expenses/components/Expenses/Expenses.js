import { useState } from "react";
import Chart from "../Chart/Chart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
  console.log(JSON.stringify(props.expenses));

  const [selectedYear, setSelectedYear] = useState("All");

  const onFilterYearChangedHandler = (selectedFilterYear) => {
    console.log(selectedFilterYear);
    setSelectedYear(selectedFilterYear);
  };

  let filteredExpenses = props.expenses;
  if (selectedYear > 0) {
    filteredExpenses = props.expenses.filter(
      (x) => x.date.getFullYear() == selectedYear
    );
  }

  return (
    <div>
      <ExpensesFilter
        onFilterYearChanged={onFilterYearChangedHandler}
        selectedYear={selectedYear}
      />
      <Chart />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
