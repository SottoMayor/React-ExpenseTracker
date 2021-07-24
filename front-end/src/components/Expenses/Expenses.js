import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem';
import { ExpensesStyled } from '../../styles/StyledComponents';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [year, setYear] = useState('2020');

    const getYearExpensesHandler = (receivedYear) => {
        setYear(receivedYear)
    }

    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString() === year.toString() 
    });

    return (
        <ExpensesStyled>
            <ExpensesFilter onGetYearExpenses={getYearExpensesHandler} selectedYear={year}/>
            {filteredExpenses.map( expense => <ExpenseItem {...expense} key={expense.id} /> )}
        </ExpensesStyled>
    )
}

export default Expenses
