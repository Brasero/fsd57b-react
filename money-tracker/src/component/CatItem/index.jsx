// path: money-tracker/src/component/CatItem/index.jsx
import "./style.scss";
import {useExpenseContext} from "../../context/ExpenseContext.jsx";

const CatItem = ({category}) => {
 
 const {state: {expenses}} = useExpenseContext()
 let nb = 0;
 const total = expenses.reduce((acc, curr) => {
  if (curr.category === category) {
   nb++;
   return acc + parseFloat(curr.price)
  }
  return acc;
 }, 0)
 const totalRounded = Math.floor(total * 100) / 100;
 
 return (
  <div className="CatItem">
   <h5>{category}</h5>
   <div className={"info"}>
    <div className={"label"}>Nombre de transactions</div>
    <div className={"label"}>Total</div>
    <div>{nb}</div>
    <div>{totalRounded || 0} €</div>
   </div>
   
  </div>
 )
}

export default CatItem