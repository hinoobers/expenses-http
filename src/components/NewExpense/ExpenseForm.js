import './ExpenseForm.css'
import { useState, useRef, Fragment } from 'react';
import Error from '../../UI/Error';


const ExpenseForm = (props) => {
    const [error, setError] = useState(null)
    console.log(error)
    const titleInputRef = useRef();
    const priceInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null)  
    }

    const submitHandler = (event) => {
        const enteredTitle = titleInputRef.current.value
        const enteredPrice = priceInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault();

        if(enteredTitle.trim().length == 0 || enteredPrice.trim().length == 0 || enteredDate.trim().length == 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid title, price and date (non-empty values)'
            })
            return
        }
        
        const data = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(data)
        props.onCancel()

        titleInputRef.current.value = ''
        priceInputRef.current.value = ''
        dateInputRef.current.value = ''
    }

    return ( 
    <Fragment>
        {error && 
        (<Error title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' ref={titleInputRef}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01' ref={priceInputRef}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31' ref={dateInputRef}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    </Fragment>
    )
}

export default ExpenseForm