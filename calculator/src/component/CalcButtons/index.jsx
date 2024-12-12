// path: calculator/src/component/CalcButtons/index.jsx
import "./style.scss";
import {useCalculatorContext} from "../../context/CalculatorContext.jsx";

const CalcButtons = () => {
 
 const {handleOperatorClick, handleReset, handleCalc} = useCalculatorContext()
 
 return (
  <>
   <button onClick={handleReset} className={"button__calc-reset"}>Reset</button>
   <button onClick={() => handleOperatorClick("+")} className={"button__calc"}>+</button>
   <button onClick={() => handleOperatorClick("*")} className={"button__calc"}>x</button>
   <button onClick={() => handleOperatorClick("-")} className={"button__calc"}>-</button>
   <button onClick={handleCalc} className={"button__calc-equal"}>=</button>
  </>
 )
}

export default CalcButtons