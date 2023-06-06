import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}

  // let title = props.title;
  const [title , setTitle] = useState(props.title);

  const clickHandler = () => {  
    // console.log('Clicked!!!!');
    setTitle('updated!');
    console.log(title);
  };
  
    // const expenseDate = new Date(2023,4,22);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 246.89;
    return (
        <div className='expense-item'>
        <ExpenseDate date={props.date} />
        
            <div className='expense-item__description'>
              <h2>{title}</h2>
              <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler }>Change Title</button>
        </div>);
}

export default ExpenseItem;