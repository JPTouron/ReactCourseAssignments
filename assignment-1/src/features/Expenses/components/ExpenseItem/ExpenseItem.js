import { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const meh = id=>e  => {
      setTitle(title+" updated on id: "+id);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={meh(props.id)}>SOEMTHING BIG</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
