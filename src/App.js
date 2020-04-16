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
  console.log(useState());
  return (
    <div className="App">
    <Alert />
    <ExpenseForm />
    <ExpenseList/>


    </div>
  );
}

export default App;
