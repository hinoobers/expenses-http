import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import { useState } from "react"

const NewExpense = (props) => {
    const saveExpenseDataHandler = (entered) => {
        const expenseData = {
            ...entered,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const [formOpen, setFormOpen] = useState(false)
    const toggleForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <div className="new-expense">
            <button onClick={toggleForm}>Add New Expense</button>
            {
                formOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleForm}/>
            }
        </div>
    )
}

export default NewExpense