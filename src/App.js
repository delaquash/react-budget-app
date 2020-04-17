import React, { useState } from 'react';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
// import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import uuid from "uuid/v4";
import './App.css';

const initialExpenses = [
  {id: uuid(), charge: "rent", amount:1600},
  {id: uuid(), charge: "car payment", amount: 5000},
  {id: uuid(), charge: "utility bills", amount: 800}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
    <Alert />
    <h1>Budget Calculator</h1>
    <main className="App">
      <ExpenseForm />
      <ExpenseList  expenses={expenses}/>
    </main>
    <h1>
      total spending: <span className="total">
        #{expenses.reduce((acc, curr) => {
            return acc += curr.amount
        }, 0)}
      </span>
    </h1>
    </>
  );
}

export default App;
