// path: money-tracker/src/component/ExpenseItem/index.jsx
import "./style.scss";
import {useExpenseContext} from "../../context/ExpenseContext.jsx";

const ExpenseItem = ({expense}) => {
 
 const {removeExpense} = useExpenseContext()
 
 const handleDelete = () => {
  removeExpense(expense.id)
 }
 
 return (
  <div className="ExpenseItem">
   <div>{expense.label}</div>
   <div>{parseFloat(expense.price).toFixed(2).replace(".", ",")} €</div>
   <div className={"category"}>{expense.category}</div>
   <button onClick={handleDelete} className={"suppress"}>X</button>
  </div>
 )
}

export default ExpenseItem