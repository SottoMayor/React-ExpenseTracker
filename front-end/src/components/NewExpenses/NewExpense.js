import React from 'react';
import { NewExpenseStyled } from '../../styles/StyledComponents';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

    const submitExpenseFormHandler = (expenseDataForm) => {
        const expenseData = {
            ...expenseDataForm,
            id: Math.random().toString()
        }

        props.onSubmitExpenseForm(expenseData)

    }

    return (
        <NewExpenseStyled>
            <NewExpenseForm onSubmitExpenseForm={submitExpenseFormHandler} />
        </NewExpenseStyled>
    )
}

export default NewExpense
