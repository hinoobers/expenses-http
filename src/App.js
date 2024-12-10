import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import Error from './UI/Error';
import { useEffect, useState } from 'react';

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
  const [isFetching, setFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);  
  
  useEffect(() => {
    const getExpenses = async () => {
      if(!isFetching) { // small optimization to prevent multiple requests
        setFetching(true);
        try {
          const response = await fetch('http://localhost:3005/expenses');
          const data = await response.json();
          if(!response.ok) {
            throw new Error("Failed to fetch data");
          }
          setExpenses(data.expenses);
        }catch(err) {
          setError({title: "An error occured", message: "Error occured, please try again later"});
          setShowError(true);
        }
        setFetching(false);
      }
    }
    getExpenses();
  }, []);

  const errorHandler = () => {
    setShowError(false);
    setError(null);
  }


  const addExpenseHandler = (expense) => {
    setExpenses((previous) => {
      return [expense, ...previous];
    })
  }

  return (
    <div className='App'>
      { showError && (<Error title={error.title} message={error.message} onConfirm={errorHandler}></Error>)}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} isLoading={isFetching}/>
    </div>
  );
}

export default App;