import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const {
        date,
        title,
        price
    } = props.data;

    return (
        <div className='expense-item'>
            <ExpenseDate className='expense-date' date={date} />
            <h2>{title}</h2>
            <div className='expense-item__description'>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem