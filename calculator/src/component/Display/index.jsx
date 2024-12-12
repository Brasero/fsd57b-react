// path: calculator/src/component/Display/index.jsx
import "./style.scss";
import {useCalculatorContext} from "../../context/CalculatorContext.jsx";

const Display = () => {
 
 const {state} = useCalculatorContext()
 const {display, error} = state;
 
 return (
  <div className="Display">
   <span className={"Display__value"}>{display}</span>
   {
    error !== "" && <div style={{color: "red"}}>{error}</div>
   }
  </div>
 )
}

export default Display