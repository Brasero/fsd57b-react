// path: calculator/src/component/Buttons/index.jsx
import "./style.scss";
import NumberButtons from "../NumberButtons/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";

const Buttons = ({numberFn, operatorFn, calcFn, onReset}) => {
 
 return (
  <div className="Buttons">
   <NumberButtons onClick={numberFn} />
   <CalcButtons onClick={operatorFn} calcClick={calcFn} onReset={onReset} />
  </div>
 )
}

export default Buttons