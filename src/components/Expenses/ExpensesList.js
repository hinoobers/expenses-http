import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    console.log(props.isLoading)
    if(props.isLoading) {
        return <p className='expenses-list__fallback'>Loading...</p>
    }
    if(props.expenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found</p>
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map(expense => (
                <ExpenseItem key={expense.id} data={expense}/>
            ))}
        </ul>
    )
}

export default ExpensesList;