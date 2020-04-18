import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({amount, charge, expense, handleCharge, handleAmount, handleSubmit}) => {
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
                                placeholder="Enter value here"
                                value={amount}
                                onChange={handleAmount}
                        />
                </div>
            </div>
            <button type="submit" className="btn">
                Submit
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}

export default ExpenseForm;
