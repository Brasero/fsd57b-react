// path: money-tracker/src/component/ExpensePerCat/index.jsx
import "./style.scss";
import CATEGORIES from "../../const/categories.js";
import CatItem from "../CatItem/index.jsx";

const ExpensePerCat = () => {
 return (
  <div className="ExpensePerCat">
   <h3>Vos dépenses par catégorie</h3>
   <div className="ExpensePerCat__container">
    {
     CATEGORIES.map(cat => <CatItem key={cat} category={cat} />)
    }
   </div>
  </div>
 )
}

export default ExpensePerCat