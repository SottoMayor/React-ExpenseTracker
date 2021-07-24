import React from 'react';
import { ChartBarStyled } from '../../styles/StyledComponents';

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if(props.max > 0){
    barFillHeight = Math.round( (props.value / props.max) * 100 ) + '%';
    }
    
    return (
        <ChartBarStyled>
            <div className="inner">
                <div className="fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="label">{props.label}</div>
        </ChartBarStyled>
    )
}

export default ChartBar
