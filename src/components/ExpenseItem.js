import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    console.log(props);
    const {
        date,
        title,
        price
    } = props.data;

    const [title2, setTitle] = useState(title) 
    const clickHandler = () => {
        
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate className='expense-date' date={date} />
            <h2>{title2}</h2>
            <div className='expense-item__description'>
                <div className='expense-item__price'>{price}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
}

export default ExpenseItem