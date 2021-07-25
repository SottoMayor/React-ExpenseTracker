import React from 'react';
import { BackdropStyled } from '../../styles/StyledComponents';

const Backdrop = (props) => {
    return (
        <BackdropStyled onClick={props.show}/>
    )
}

export default Backdrop
