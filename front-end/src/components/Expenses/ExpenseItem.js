import React from 'react';
import { ExpenseItemStyled } from '../../styles/StyledComponents';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    return (
        <ExpenseItemStyled>
            
            <ExpenseDate date={props.date}/>

            <h2 className="title">{props.title}</h2>
            <div className="price">${props.amount}</div>
        </ExpenseItemStyled>
    )
}

export default ExpenseItem
