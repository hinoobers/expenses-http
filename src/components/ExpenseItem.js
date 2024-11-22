import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from './Card';

const ExpenseItem = (props) => {
    console.log(props);
    const {
        date,
        title,
        price
    } = props.data;

    return (
        <Card className='expense-item'>
            <ExpenseDate className='expense-date' date={date} />
            <h2>{title}</h2>
            <div className='expense-item__description'>
                <div className='expense-item__price'>{price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem