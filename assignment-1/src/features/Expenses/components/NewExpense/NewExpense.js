import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [displayForm, setDisplayForm] = useState(false);

  const onExpenseSubmittedHandler = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random().toString() };

    props.onExpenseSubmitted(expenseData);
    setDisplayForm(false);
  };

  const onFormCancellationHandler = () => {
    setDisplayForm(false);
  };

  const onDisplayFormClickHandler = () => {
    setDisplayForm(true);
  };

  if (displayForm)
    return (
      <ExpenseForm
        onExpenseSubmitted={onExpenseSubmittedHandler}
        onFormCancellationHandler={onFormCancellationHandler}
      />
    );
  else
    return (
      <div>
        <button onClick={onDisplayFormClickHandler}>
          Wanna Add an Expense?
        </button>
      </div>
    );
}

export default NewExpense;
