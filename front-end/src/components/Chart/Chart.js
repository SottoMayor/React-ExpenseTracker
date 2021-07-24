import React from 'react';
import { ChartStyled } from '../../styles/StyledComponents';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <ChartStyled>
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        value={dataPoint.value}
                        max={null}
                        label={dataPoint.label}
                        key={dataPoints.key}
                    />
                );
            })}
        </ChartStyled>
    );
};

export default Chart;
