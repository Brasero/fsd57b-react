// path: money-tracker/src/component/ExpenseList/index.jsx
import "./style.scss";
import {useExpenseContext} from "../../context/ExpenseContext.jsx";
import ExpenseItem from "../ExpenseItem/index.jsx";

const ExpenseList = () => {
 
 const {state} = useExpenseContext();
 const {expenses} = state;
 const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
 const roundTotal = Math.floor(total * 100) / 100;
 
 return (
  <div className="ExpenseList">
   <h3>Toutes les dépenses</h3>
   {
    expenses.length ?
     expenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
     :
     <div>Aucune dépense à afficher.</div>
   }
   <h5 className="total">
    Total : {roundTotal} €
   </h5>
  </div>
 )
}

export default ExpenseList