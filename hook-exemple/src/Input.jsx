import {useState} from "react";

const Input = () => {
 
 const [state, setState] = useState({
  name: "",
  surname: "",
  age: 0,
  minor: false
 })
 
 const handleChange = (e) => {
  const {name, value, type} = e.target
  console.log(name, value)
  const newState = {...state}
  if (type !== "checkbox") {
   newState[name] = value // [name] sera remplacer par la valeur se trouvant dans la constante "name"
  } else {
   newState[name] = !state.minor  // Pour les checkbox, on inverse la valeur lors du click (false devient true etc)
  }
  setState(newState)
 }
 
 
 return (
  <>
   <input type={"text"} name={"name"} value={state.name} onChange={handleChange} />
   <input type={"text"} name={"surname"} value={state.surname} onChange={handleChange} />
   <input type={"number"} name={"age"} value={state.age} onChange={handleChange} />
   <input type={"checkbox"} name={"minor"} checked={state.minor} onChange={handleChange} />
  </>
  
 )
}

export default Input