// path: calculator/src/component/Calculator/index.jsx
import "./style.scss";
import Display from "../Display/index.jsx";
import Buttons from "../Buttons/index.jsx";



const Calculator = () => {
 
 return (
  <div className="Calculator">
    <Display />
    <Buttons />
  </div>
 )
}

export default Calculator