import React from 'react'
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const dataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fev', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Set', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={dataPoints}/>
    )
}

export default ExpensesChart