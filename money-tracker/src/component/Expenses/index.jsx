// path: money-tracker/src/component/Expenses/index.jsx
import "./style.scss";
import ExpenseList from "../ExpenseList/index.jsx";
import ExpensePerCat from "../ExpensePerCat/index.jsx";

const Expenses = () => {
 
 return (
  <div className="Expenses">
      <h2>Vos dépenses</h2>
      <div className={"Expenses__container"}>
       <ExpenseList />
       <ExpensePerCat />
      </div>
  </div>
 )
}

export default Expenses