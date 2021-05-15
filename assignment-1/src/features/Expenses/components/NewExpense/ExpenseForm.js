import React, { useState } from "react";

// import './ExpenseForm.css';

// function formatDate(date) {
//   var d = new Date(date),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [year, month, day].join("-");
// }

const ExpenseForm = (props) => {
  // var today = formatDate(new Date());
  var today = new Date();

  //   const [title, setTitle] = useState(""); //this is not a bad approach at all, it is just not object-wise
  //   const [amount, setAmount] = useState(0);
  //   const [date, setDate] = useState(today);

  const [userInput, setUserInput] = useState({
    //this is an object-wise approach in which we encapsulate all changes within an object
    title: "",
    amount: 0,
    date: today,
  });

  const onCancelClickHandler = () => {
    props.onFormCancellationHandler();
  };

  const onTitleChangeHandler = (e) => {
    // setTitle(e.target.value);
    setUserInput({
      // this is a way to update the state using an object, HOWEVER this is BAD - as React schedules state changes, we cannot guarantee that '...userInput' (the prevState) is an exact snapshot of the previous state
      ...userInput,
      title: e.target.value,
    });
  };
  const onAmountChangeHandler = (e) => {
    setUserInput((prevState) => {
      //THIS IS A BETTER APPROACH THAN THE ONE ABOVE, this GUARANTEES that all states are changed considering a potential large cascade of state changes, which in turns considers the actual previous snapshot state
      return { ...prevState, amount: e.target.value };
    });
  };
  const onDateChangeHandler = (e) => {
    // var formatted = formatDate(e.target.value);
    var formatted = e.target.value;

    setUserInput({
      ...userInput,
      date: formatted,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    var datey = new Date(userInput.date);
    let formInput = {
      ...userInput,
      date: datey,
      amount: parseInt(userInput.amount),
    };

    props.onExpenseSubmitted(formInput);

    //reset user input after submission
    setUserInput({
      title: "",
      amount: 0,
      date: today,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={onTitleChangeHandler}
            type="text"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={onAmountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={onDateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelClickHandler}>
          Cancel
        </button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
