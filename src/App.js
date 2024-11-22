import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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

  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    console.log(expense)
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;