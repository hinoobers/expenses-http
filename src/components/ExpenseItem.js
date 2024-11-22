import './ExpenseItem.css'

const ExpenseItem = (props) => {
    console.log(props);
    const {
        date, title, price
    } = props.data;
    return (
        <div className='expense-item'>
            <div>{date.toString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem