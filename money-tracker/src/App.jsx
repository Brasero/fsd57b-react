import './App.css'
import ExpenseForm from "./component/ExpenseForm/index.jsx";
import Expenses from "./component/Expenses/index.jsx";

function App() {
 
 return (
  <>
   <h1>Suivi de dépenses</h1>
   <ExpenseForm/>
   <Expenses/>
  </>
 )
}

export default App