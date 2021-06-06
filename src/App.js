import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import { ExpenseForm } from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { Component, useState } from 'react';


let DUMMY_DATA = [
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




function App() {

  const [expenses, setExpenses] = useState(DUMMY_DATA);
  
  


  const addExpenseHandler = expense =>{
    //setExpenses([...expenses, expense])

    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    })
    

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
