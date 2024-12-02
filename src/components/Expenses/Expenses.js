import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState('2024');

  const filterChange = (target) => {
    console.log(`Year data in Expenses.js ${target}`);
    // filter
    setYear(target);
  }



  return (
      <Card className="expenses">
          <ExpensesFilter onFilterChange={filterChange}/>
          {
            props.expenses.filter(ex => {
              console.log(ex.date);
              return ex.date.getFullYear() == year;  
            }).map((expense) => {
              return <ExpenseItem data={expense} key={expense.id} />
            })
          }ss
      </Card>
  )
}

export default Expenses;