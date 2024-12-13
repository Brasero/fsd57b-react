import {createContext, useContext} from "react";
import useExpenseReducer from "../store/ExpenseReducer.jsx";

const ExpenseContext = createContext();

const ExpenseProvider = ({children}) => {
 
 const context = useExpenseReducer()
 
 return <ExpenseContext.Provider value={context}>
  {children}
 </ExpenseContext.Provider>
}

export const useExpenseContext = () => useContext(ExpenseContext);



export default ExpenseProvider