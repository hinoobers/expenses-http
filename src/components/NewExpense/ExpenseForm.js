import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })
    const submitHandler = (event) => {
        event.preventDefault();
        
        const data = {
            title: userInput.enteredTitle,
            price: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        }

        props.onSaveExpenseData(data)

        setUserInput({
            enteredTitle:'',
            enteredPrice:'',
            enteredDate:''
        })
    }

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const priceChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.enteredPrice} onChange={priceChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2024-11-12' max='2026-01-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm