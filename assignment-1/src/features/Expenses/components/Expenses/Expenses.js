import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  console.log(JSON.stringify(props.expenses));

  const [selectedYear, setSelectedYear] = useState(2022);

  const onFilterYearChangedHandler = (selectedFilterYear) => {
    setSelectedYear(selectedFilterYear);
    console.log(selectedFilterYear);
  };

  return (
    <div>
      <div>
        <ExpensesFilter
          onFilterYearChanged={onFilterYearChangedHandler}
          selectedYear={selectedYear}
        />

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
    </div>
  );
}

export default Expenses;
