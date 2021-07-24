import React, { useState } from 'react';
import { NewExpenseFormStyled } from '../../styles/StyledComponents';

const NewExpenseForm = (props) => {

    const [title, setTitle] = useState('');

    const titleHandler = event => { 
        setTitle(event.target.value);
    }

    const [amount, setAmount] = useState('');

    const amountHandler = event => {
        setAmount(event.target.value);
    }
    
    const [date, setDate] = useState('');

    const dateHandler = event => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onSubmitExpenseForm(formData)

        setTitle('');
        setAmount('');
        setDate('');

        cancelAddExpense()
    }

    const cancelAddExpense = () => {
        props.onCancelAddExpense()
    }


    return (
        <NewExpenseFormStyled>
            <form onSubmit={submitHandler}>
                <div className="controls">
                    <div className="control">
                        <label>Title</label>
                        <input value={title} type="text" onChange={titleHandler}/>
                    </div>
                    <div className="control">
                        <label>Amount</label>
                        <input value={amount} type="number" min="0.01" step="0.01" onChange={amountHandler}/>
                    </div>
                    <div className="control">
                        <label>Date</label>
                        <input value={date} type="date" min="2019-01-01" max="2022-12-31" onChange={dateHandler}/>
                    </div>
                </div>

                <div className="actions">
                    <button onClick={cancelAddExpense}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>

            </form>
        </NewExpenseFormStyled>
    )
}

export default NewExpenseForm
