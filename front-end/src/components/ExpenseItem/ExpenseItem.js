import React from 'react';
import { ExpenseItemStyled } from '../../styles/StyledComponents';

function ExpenseItem() {
    return (
        <ExpenseItemStyled>
            <section>
                March 28th 2021
            </section>
            <h2>Car Insurance</h2>
            <div>$300</div>
        </ExpenseItemStyled>
    )
}

export default ExpenseItem
