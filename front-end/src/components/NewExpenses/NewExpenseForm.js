import React, { useState, useRef, Fragment } from 'react';
import { NewExpenseFormStyled } from '../../styles/StyledComponents';


const NewExpenseForm = (props) => {
    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    const [showAlert, setShowAlert] = useState(false);

    const showAlertHandler = () => {
        setShowAlert((prevState) => !prevState);
        return showAlert;
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const amount = amountRef.current.value;
        const date = dateRef.current.value;

        const formData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        };

        props.onSubmitExpenseForm(formData);

        titleRef.current.value = '';
        amountRef.current.value = '';
        dateRef.current.value = '';

        props.onShowModal(showAlertHandler())

        cancelAddExpense();
    };

    const cancelAddExpense = () => {
        props.onCancelAddExpense();
    };

    return (
        <Fragment>

            <NewExpenseFormStyled>
                <form onSubmit={submitHandler}>
                    <div className="controls">
                        <div className="control">
                            <label>Title</label>
                            <input type="text" ref={titleRef} />
                        </div>
                        <div className="control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                ref={amountRef}
                            />
                        </div>
                        <div className="control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                                ref={dateRef}
                            />
                        </div>
                    </div>

                    <div className="actions">
                        <button onClick={cancelAddExpense}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </NewExpenseFormStyled>
        </Fragment>
    );
};

export default NewExpenseForm;
