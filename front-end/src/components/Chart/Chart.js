import React from 'react';
import { ChartStyled } from '../../styles/StyledComponents';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map( dataPoint => dataPoint.value );
    const totalMaximum = dataPointsValues.reduce( (prev, current) => {return prev + current}, 0);

    return (
        <ChartStyled>
            {props.dataPoints.map(dataPoint => {
                return (
                    <ChartBar
                        value={dataPoint.value}
                        max={totalMaximum}
                        label={dataPoint.label}
                        key={dataPoint.label}
                    />
                );
            })}
        </ChartStyled>
    );
};

export default Chart;
