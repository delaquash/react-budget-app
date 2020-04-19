import React, { useState } from 'react';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from "uuid/v4";
import './App.css';

const initialExpenses = [
  {id: uuid(), charge: "rent", amount:1600},
  {id: uuid(), charge: "car payment", amount: 5000},
  {id: uuid(), charge: "utility bills", amount: 800}
];

function App() {
  // all expenses and add expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single charges
  const [charge, setCharge] = useState("");

  // Single amount
  const [amount, setAmount] = useState("");

  // Functionalities
  const handleCharge=(e)=> {
    setCharge(e.target.value);
  };
  const handleAmount=(e)=>{
    setAmount(e.target.value);

  }

  const handleSubmit = e => {
    console.log(amount, charge)
    e.preventDefault();
    if(charge !== '' && amount > 0){
      // The above code using the short notation syntax in ES6 which means charges:charges === charges, same for amount
      const singleExpense = { id:uuid(), charge, amount }
      setExpenses([...expenses, singleExpense])
      setCharge("");
      // setAmount("")
    } else {
      // handleAlert
    }
  };

  return (
    <>
    <Alert />
    <h1>Budget Calculator</h1>
    <main className="App">
      <ExpenseForm
        charge={charge}
        amount={amount}
        handleCharge={handleCharge}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
      />
      <ExpenseList  expenses={expenses}/>
    </main>
    <h1>
      total spending: {" "}
      <span className="total">
        #{expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount))
        }, 0)}
      </span>
    </h1>
    </>
  );
}

export default App;
