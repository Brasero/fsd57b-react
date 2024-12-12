// path: calculator/src/component/Buttons/index.jsx
import "./style.scss";
import NumberButtons from "../NumberButtons/index.jsx";
import CalcButtons from "../CalcButtons/index.jsx";

const Buttons = () => {
 
 return (
  <div className="Buttons">
   <NumberButtons />
   <CalcButtons />
  </div>
 )
}

export default Buttons