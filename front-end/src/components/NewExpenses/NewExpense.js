import React, { useState } from 'react';
import { NewExpenseStyled } from '../../styles/StyledComponents';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

    const [addExpense, setAddExpense] = useState(false)

    const submitExpenseFormHandler = (expenseDataForm) => {
        const expenseData = {
            ...expenseDataForm,
            id: Math.random().toString()
        }

        props.onSubmitExpenseForm(expenseData)

    }

    const addExpenseHandler = () => {
        setAddExpense( prevState => !prevState)
    }

    const cancelAddExpenseHandler = () => {
        addExpenseHandler()
    }

    return (
        <NewExpenseStyled>
            { addExpense &&  <NewExpenseForm onCancelAddExpense={cancelAddExpenseHandler} onSubmitExpenseForm={submitExpenseFormHandler} />}
            { !addExpense && <button onClick={addExpenseHandler}>Add Expense</button> }
            
        </NewExpenseStyled>
    )
}

export default NewExpense
