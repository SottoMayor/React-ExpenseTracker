import React from 'react';
import { ExpenseItemStyled } from '../../styles/StyledComponents';

function ExpenseItem(props) {
    console.log(props)
    return (
        <ExpenseItemStyled>
            <section>
                {props.date.toISOString()}
            </section>
            <h2>{props.title}</h2>
            <div>${props.amount}</div>
        </ExpenseItemStyled>
    )
}

export default ExpenseItem
