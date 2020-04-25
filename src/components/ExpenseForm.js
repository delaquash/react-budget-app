import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({amount, charge, expenses, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
           <div className="form-center">
               <div className="form-group">
                   <label htmlFor="charge">Charge</label>
                   <input
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="Enter value here"
                        value={charge}
                        onChange={handleCharge}
                    />
               </div>

             <div className="form-group">
                <label htmlFor="amount">Amount</label>
                    <input
                                type="value"
                                className="form-control"
                                id="amount"
                                name="amount"
                                placeholder="Enter amount paid here e.g 100"
                                value={amount}
                                onChange={handleAmount}
                        />
                </div>
            </div>
            <button type="submit" className="btn">
                {edit?'edit':'submit'}
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}

export default ExpenseForm;
