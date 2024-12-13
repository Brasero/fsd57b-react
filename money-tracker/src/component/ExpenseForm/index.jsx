// path: money-tracker/src/component/ExpenseForm/index.jsx
import "./style.scss";
import CATEGORIES from "../../const/categories.js";
import {useExpenseContext} from "../../context/ExpenseContext.jsx";

const ExpenseForm = () => {
 
 const {state, setValue, addExpense} = useExpenseContext()
 const {expense} = state;
 const {error} = state;
 
 const handleChange = (e) => {
  const {name, value} = e.target
  setValue({name, value})
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  addExpense();
 }
 
 return (<form onSubmit={handleSubmit} className="ExpenseForm">
   <h2 className={"ExpenseForm__title"}>Saisissez vos dépenses</h2>
   <div className="ExpenseForm__form">
    <div className="inputGroup">
     <input onChange={handleChange} value={expense.label} type="text" id={"label"} name={"label"}
            placeholder={"Courses"}/>
     <label htmlFor="label">Label de la dépense</label>
     {
      error.label && <span className={"error"}>Merci de renseigner un label.</span>
     }
    </div>
    <div className="inputGroup">
     <input onChange={handleChange} value={expense.price} type="number" id={"price"} name={"price"}
            placeholder={"48,50"}/>
     <label htmlFor="price">Montant de la dépense</label>
     {
      error.price && <span className={"error"}>Merci de renseigner un montant.</span>
     }
    </div>
    <div className="inputGroup">
     <select onChange={handleChange} value={expense.category} name="category" id="category">
      <option value="">----</option>
      {CATEGORIES.map(cat => <option value={cat} key={cat}>{cat}</option>)}
     </select>
     <label htmlFor="category">Catégorie de la dépense</label>
     {error.category && <span className={"error"}>Merci de renseigner une catégorie.</span>}
    </div>
    <button>Ajouter la dépense</button>
   </div>
  </form>)
}

export default ExpenseForm