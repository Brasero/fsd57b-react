// path: calculator/src/component/CalcButtons/index.jsx
import "./style.scss";

const CalcButtons = ({onClick, calcClick, onReset}) => {
 
 return (
  <>
   <button onClick={onReset} className={"button__calc-reset"}>Reset</button>
   <button onClick={() => onClick("+")} className={"button__calc"}>+</button>
   <button onClick={() => onClick("*")} className={"button__calc"}>x</button>
   <button onClick={() => onClick("-")} className={"button__calc"}>-</button>
   <button onClick={calcClick} className={"button__calc-equal"}>=</button>
  </>
 )
}

export default CalcButtons