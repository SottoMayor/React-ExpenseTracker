import React, { useState } from 'react'

import { ExpensesStyled } from '../../styles/StyledComponents';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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

            <ExpensesList expenses={filteredExpenses}/>
        </ExpensesStyled>
    )
}

export default Expenses
