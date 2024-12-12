import {createContext, useContext} from "react";
import {useCalculator} from "../store/index.jsx";

const CalculatorContext = createContext();


export const CalculatorProvider = ({ children }) => {
 
 const context = provideCalculator()
 
 return <CalculatorContext.Provider value={context}>
  {children}
 </CalculatorContext.Provider>
}


const provideCalculator = () => {
 const [state, dispatch] = useCalculator()
 
 const handleNumberClick = (num) => {
  dispatch({
   type: "set_number",
   payload: num
  })
 }
 
 const handleOperatorClick = (operator) => {
  dispatch({
   type: "set_operator",
   payload: operator
  })
 }
 
 const handleCalc = () => dispatch({type: "calc"})
 
 const handleReset = () => dispatch({type: "reset"})
 
 
 return {
  state,
  handleNumberClick,
  handleOperatorClick,
  handleCalc,
  handleReset
 }
}

export const useCalculatorContext = () => useContext(CalculatorContext);