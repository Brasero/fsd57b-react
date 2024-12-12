// path: calculator/src/component/NumberButtons/index.jsx
import "./style.scss";
import {useCalculatorContext} from "../../context/CalculatorContext.jsx";

const NumberButtons = () => {
 
 const {handleNumberClick} = useCalculatorContext()
 
 const buttonsArray = Array.from(Array(10).keys())
 
 return (
  <>
   {
    buttonsArray.reverse().map((i) => {
     return <button key={i} onClick={() => handleNumberClick(i)} className={"button__number"}>{i}</button>
    })
   }
  </>
 )
}

export default NumberButtons