import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const {
        date,
        title,
        price
    } = props.data;


    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate className='expense-date' date={date} />
                <h2>{title}</h2>
                <div className='expense-item__description'>
                    <div className='expense-item__price'>{price}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem