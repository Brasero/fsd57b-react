// path: calculator/src/component/Calculator/index.jsx
import "./style.scss";
import Display from "../Display/index.jsx";
import Buttons from "../Buttons/index.jsx";
import {useEffect, useReducer} from "react";


const initialState = {
 display: 0,
 operator: "",
 previous: 0,
 error: ""
}

const reducer = (state, action) => {
 
 switch (action.type) {
  
  case "set_number":
   return {
    ...state,
    display: parseInt(`${state.display}${action.payload}`),
    error: ""
   }
   
  case "set_operator":
   return state.display !== 0 ? {
    ...state,
    display: 0,
    operator: action.payload,
    previous: state.display,
    error: ""
   } :
    {
     ...state,
     error: "Merci de saisir valeur avant de choisir un opérateur"
    }
   
  case "calc":
   return state.display !== 0 && state.previous !== 0 && state.operator !== "" ?
    {
     ...state,
     display: eval(`${state.previous}${state.operator}${state.display}`),
     operator: "",
     previous: "",
     error: ""
    }
    :
    {
     ...state,
     error: "Merci de saisir des valeurs avant de calculer"
    };
   
  case "reset":
   return initialState;
  
  default:
   return state;
 }
}


const Calculator = () => {
 
 const [state, dispatch] = useReducer(reducer, initialState);
 
 useEffect(() => {
  console.log(state)
 }, [state])
 
 const handleNumberClick = (num) => {
  dispatch({
   type: "set_number",
   payload: num
  })
 }
 
 const handleOperatorClick = (operator) => {
  dispatch({
   type: "set_operator",
   payload: operator
  })
 }
 
 const handleCalc = () => dispatch({type: "calc"})
 
 const handleReset = () => dispatch({type: "reset"})
 
 return (
  <div className="Calculator">
    <Display display={state.display} error={state.error} />
    <Buttons numberFn={handleNumberClick} onReset={handleReset} operatorFn={handleOperatorClick} calcFn={handleCalc} />
  </div>
 )
}

export default Calculator