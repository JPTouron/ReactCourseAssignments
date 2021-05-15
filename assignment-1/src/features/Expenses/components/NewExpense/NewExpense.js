import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onExpenseSubmittedHandler = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random().toString() };


    props.onExpenseSubmitted(expenseData);

  };

  return <ExpenseForm onExpenseSubmitted={onExpenseSubmittedHandler} />;
}

export default NewExpense;
