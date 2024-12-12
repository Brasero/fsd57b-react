// path: message/src/component/Form/index.jsx
import "./style.scss";
import {COLORS, FONT_SIZES} from "../../const/formOption.js";
import {useTextContext} from "../../context/TextContext.jsx";

const Form = () => {
 
 const {state, handleValueChange, handleAdd} = useTextContext();
 
 const {message: {text, color, size}, error} = state;
 
 const handleChange = (e) => {
  const {name, value} = e.target
  handleValueChange(name,value)
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  handleAdd()
 }
 
 return (
  <form className="Form" onSubmit={handleSubmit}>
   <div className="inputGroup">
    <input type="text" id={"text"} name={"text"} value={text} onChange={handleChange} />
    <label htmlFor="text">Saisissez votre texte</label>
   </div>
   <div className="inputGroup">
    <select name="color" id="color" value={color} onChange={handleChange}>
     {
      COLORS.map((color, i) => <option key={i} value={color}>{color}</option> )
     }
    </select>
    <label htmlFor="color">Selectionnez un rendu</label>
   </div>
   <div className="inputGroup">
    <select name="size" id="size" value={size} onChange={handleChange}>
     {
      FONT_SIZES.map((size, i) => <option key={i} value={size}>{size}px</option>)
     }
    </select>
    <label htmlFor="size">Taille du texte</label>
   </div>
   <button role={"button"} >Valider</button>
   {
    error !== "" && <div style={{color: "red"}}>{error}</div>
   }
  </form>
 )
}

export default Form