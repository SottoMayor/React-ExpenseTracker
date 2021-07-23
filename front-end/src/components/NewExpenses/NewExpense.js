import React from 'react';
import { NewExpenseStyled } from '../../styles/StyledComponents';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = () => {
    return (
        <NewExpenseStyled>
            <NewExpenseForm/>
        </NewExpenseStyled>
    )
}

export default NewExpense
