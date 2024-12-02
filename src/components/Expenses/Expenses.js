import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState('2024');

  const filterChange = (target) => {
    console.log(`Year data in Expenses.js ${target}`);
    // filter
    setYear(target);
  }


  const expensesFilt = props.expenses.filter(ex => {
    console.log(ex.date);
    return ex.date.getFullYear() == year;
  });


  return (
      <Card className="expenses">
          <ExpensesFilter onFilterChange={filterChange}/>
          <ExpensesList expenses={expensesFilt}/>           
      </Card>
  )
}

export default Expenses;