import React from 'react';
import { ExpensesFilterStyled } from '../../styles/StyledComponents';

const ExpensesFilter = (props) => {

  const selectedYearHandler = (event) => {
    props.onGetYearExpenses(event.target.value);
  }

  return (
    <ExpensesFilterStyled>
      <div className='control'>
        <label>Filter by year</label>
        <select onChange={selectedYearHandler} value={props.selectedYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </ExpensesFilterStyled>
  );
};

export default ExpensesFilter;