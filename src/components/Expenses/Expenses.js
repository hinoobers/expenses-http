import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";

const Expenses = (props) => {
    const expenses = [
        {
          date: new Date(2024, 10, 1),
          title: 'New book',
          price: 30.99
        },
        {
          date: new Date(2025, 1, 10),
          title: 'Old book',
          price: 12.99
        }
    ]
      
    return (
        <Card className="expenses">
            <ExpenseItem data={expenses[0]} />
            <ExpenseItem data={expenses[1]} />
        </Card>
    )
}

export default Expenses;