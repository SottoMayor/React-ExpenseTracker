import React from 'react';
import { ModalStyled } from '../../styles/StyledComponents';
import Button from './Button';

const Modal = (props) => {
    return (
        <ModalStyled>

            <header>
                <h2>Expense Tracker - A awesome tool!</h2>
            </header>
            <main>
                <h2>This is a test!</h2>
                {props.children}
            </main>
            <footer>
                <Button>Ok!</Button>
            </footer>
        </ModalStyled>
    )
}

export default Modal
