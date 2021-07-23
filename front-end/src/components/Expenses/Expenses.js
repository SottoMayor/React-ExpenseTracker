import React from 'react'

import ExpenseItem from './ExpenseItem';
import { ExpensesStyled } from '../../styles/StyledComponents';

const Expenses = (props) => {
    console.log(props)
    return (
        <ExpensesStyled>
            {props.expenses.map( expense => <ExpenseItem {...expense} key={expense.id} /> )}
        </ExpensesStyled>
    )
}

export default Expenses
