import React, { Fragment } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    const notFound = (
        <h2 style={ {textAlign: "center"} }>
            No expenses found!
        </h2>
    )

    return (
        <Fragment>
            
            {props.expenses.length > 0 &&
            props.expenses.map( expense => {
                return <ExpenseItem {...expense} key={expense.id} /> 
            })
            }

            {props.expenses.length === 0 && notFound}

        </Fragment>
    )
}

export default ExpensesList
