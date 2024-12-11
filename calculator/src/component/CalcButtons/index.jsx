// path: calculator/src/component/CalcButtons/index.jsx
import "./style.scss";

const CalcButtons = () => {
 
 return (
  <>
   <button className={"button__calc-reset"}>Reset</button>
   <button className={"button__calc"}>+</button>
   <button className={"button__calc"}>x</button>
   <button className={"button__calc"}>-</button>
   <button className={"button__calc-equal"}>=</button>
  </>
 )
}

export default CalcButtons