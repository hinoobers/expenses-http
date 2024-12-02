import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    date: new Date(2024, 10, 1),
    title: 'New book',
    price: 30.99,
    id: 'id1'
  },
  {
    date: new Date(2025, 1, 10),
    title: 'Old book',
    price: 12.99,
    id: 'id2'
  },
  {
    date: new Date(2024, 0, 25),
    title: 'New bag',
    price: 139.99,
    id: 'id3'
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previous) => {
      return [expense, ...previous];
    })
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;