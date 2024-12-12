// path: calculator/src/component/Display/index.jsx
import "./style.scss";

const Display = ({display, error = ""}) => {
 
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