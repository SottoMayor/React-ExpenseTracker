import React from 'react';
import { ExpenseDateStyled } from '../../styles/StyledComponents';

const ExpenseDate = (props) => {

    
    const day = props.date.toLocaleString('pt-BR', { day: '2-digit' })
    const month = props.date.toLocaleString('pt-BR', { month: 'long' })
    const year = props.date.getFullYear();

    return (
        <ExpenseDateStyled>
                <div className="day">{ day }</div>
                <div className="month">{ month }</div>
                <div className="year">{ year }</div>
        </ExpenseDateStyled>
    )
}

export default ExpenseDate
