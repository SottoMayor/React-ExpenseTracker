import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../UI/Backdrop';
import Modal from '../UI/Modal';

const NewExpenseAlert = (props) => {
    return (
        <Fragment>
            {createPortal(
                <Backdrop show={props.show} />,
                document.getElementById('backdrop-root')
            )}

            {createPortal(
                <Modal show={props.show} clicked={props.clicked}>
                    {props.children}
                </Modal>,
                document.getElementById('modal-root')
            )}
        </Fragment>
    );
};

export default NewExpenseAlert;
