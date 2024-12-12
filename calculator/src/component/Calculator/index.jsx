// path: calculator/src/component/Calculator/index.jsx
import "./style.scss";
import Display from "../Display/index.jsx";
import Buttons from "../Buttons/index.jsx";
import {useCalculator} from "../../store/index.jsx";



const Calculator = () => {
 
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
 
 return (
  <div className="Calculator">
    <Display display={state.display} error={state.error} />
    <Buttons numberFn={handleNumberClick} onReset={handleReset} operatorFn={handleOperatorClick} calcFn={handleCalc} />
  </div>
 )
}

export default Calculator