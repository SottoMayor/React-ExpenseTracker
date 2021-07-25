import React from 'react';
import { ButtonStyled } from '../../styles/StyledComponents';

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.clicked}>
            {props.children}
        </ButtonStyled>
    )
}

export default Button
