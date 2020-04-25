import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import uuid from "uuid/v4";
import './App.css';

// const initialExpenses = [
//   {id: uuid(), charge: "rent", amount:1600},
//   {id: uuid(), charge: "car payment", amount: 5000},
//   {id: uuid(), charge: "utility bills", amount: 800}
// ];

const initialExpenses = localStorage.getItem('expense')
? JSON.parse(localStorage.getItem('expense'))
: [];



function App() {
  // all expenses and add expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single charges
  const [charge, setCharge] = useState("");

  // Single amount
  const [amount, setAmount] = useState("");
  // hadleAlert
   const [ alert, setAlert ] =  useState({ show: false });

  // Edit items in the list
  const [ edit, setEdit ] = useState(false);

  // ID
  const [ id, setId] = useState(0);

  // useEffect cllback function

  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expense", JSON.stringify(expenses));
  }, [expenses]);


  // Functionalities
  const handleCharge=(e)=> {
    setCharge(e.target.value);
  };
  const handleAmount=(e)=>{
    setAmount(e.target.value);

  }
 const handleAlert = ({ type, text }) => {
        setAlert({show:true, type, text});
        setTimeout(() => {
            setAlert({ show: false });
        }, 4000);
    };



  const handleSubmit = e => {
    // console.log(amount, charge)
    e.preventDefault();
    if(charge !== '' && amount > "" ){

      if(edit) {
        let temp = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        });
        setExpenses(temp);
        setEdit(false);
        handleAlert({ type:"success",
        text: "Item editted successfuly"
      });
      }else {
         // The above code using the short notation syntax in ES6 which means charges:charges === charges, same for amount
         const singleExpense = { id:uuid(), charge, amount }
      // setExpenses([...expenses, singleExpense])
      setExpenses(previousStateExpenses => [
        ...previousStateExpenses,
        singleExpense
      ]);
      handleAlert({type:"success",
       text:"Item(s) Added Successfully"
      });
      }
      setCharge("");
      setAmount("");

    } else {
      // handleAlert
      handleAlert({
        type: "danger",
        text: "Charges cannot be empty values and must also be more than 0"
      })
    }
  };

  // Clearing all items
  const clearItems = () => {
    console.log("All items deleted")
    setExpenses([]);
    handleAlert({ type: 'danger', text: "All Item(s) deleted successfully"});
  };

  // Deleting individual items
  const handleDelete =(id) => {
 let temp = expenses.filter(item => item.id !== id );
//  console.log(temp);
  setExpenses(temp);
  handleAlert({ type: "danger",
  text: "Item successfully deleted from list"
})
}


// Editing individual item
const handleEdit = id => {
 let expense = expenses.find(item => item.id === id );
 let { charge, amount } = expense
 setAmount(amount);
 setCharge(charge);
 setEdit(true);
 setId(id);

}
  return (
    <>
     {alert.show && <Alert type={alert.type} text={alert.text} />}
    <Alert />
    <h1>Budget Calculator</h1>
    <main className="App">
      <ExpenseForm
        charge={charge}
        amount={amount}
        handleCharge={handleCharge}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
        edit={edit}
      />
      <ExpenseList
       expenses={expenses}
       handleDelete={handleDelete}
       handleEdit={handleEdit}
       clearItems={clearItems}
       />
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
