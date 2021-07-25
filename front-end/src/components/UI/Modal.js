import React from 'react';
import { ModalStyled } from '../../styles/StyledComponents';
import Button from './Button';

const Modal = (props) => {
    return (
        props.show ? (
        <ModalStyled>

            <header>
                <h2>Expense Tracker - A awesome tool!</h2>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Button clicked={props.clicked}>Ok!</Button>
            </footer>
        </ModalStyled>
        ) : null
    )
}

export default Modal
