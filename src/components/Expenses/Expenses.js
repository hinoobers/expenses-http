import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;

  const filterChange = (target) => {
    console.log(`Year data in Expenses.js ${target}`);
  }

  return (
      <Card className="expenses">
          <ExpensesFilter onFilterChange={filterChange}/>
          <ExpenseItem data={expenses[0]} />
          <ExpenseItem data={expenses[1]} />
      </Card>
  )
}

export default Expenses;