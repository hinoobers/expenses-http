import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";

const Expenses = (props) => {
  const expenses = props.expenses;

  return (
      <Card className="expenses">
          <ExpenseItem data={expenses[0]} />
          <ExpenseItem data={expenses[1]} />
      </Card>
  )
}

export default Expenses;