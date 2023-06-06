import React, { useState } from 'react';

import Expenses from './Components/Expenses/Expenses';

// import ExpenseForm from './Components/NewExpense/ExpenseForm';
import NewExpense from './Components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'A Book ',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV',
     amount: 799.49, 
     date: new Date(2021, 8, 27) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New StoryBook',
      amount: 120,
      date: new Date(2023, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Laptop',
      amount: 188.70,
      date: new Date(2020, 9, 3),
    },
  ];

  const App = () => {
    const [expenses , setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses ((prevExpenses) => {
      return [expense , ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Lets get started!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;