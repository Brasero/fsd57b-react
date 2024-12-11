import './App.css'
import Result from "./component/Result.jsx";
import Inputs from "./component/Inputs.jsx";
import Buttons from "./component/Buttons.jsx";
import {useReducer} from "react";

const initialState = {
 result: 0,
 a: 0,
 b: 0,
 message: ""
}

const reducer = (state, action) => {
 switch (action.type) {
  case "calc":
   return state.a !== 0 && state.b !== 0 ? { // Condition ternaire permettant de vérifier si les champs "a" et "b" sont bien différent de 0
    ...state,
    result: eval(`${state.a} ${action.payload} ${state.b}`), // eval() permet d'évaluer une expression mathématique presentée sous forme de chaine de caractère
    message: ""
   } : {
    ...state,
    message: "Merci de saisir des valeur différentes de 0"
   }
  case "set_value":
   return {
    ...state,
    [action.payload.name]: action.payload.value,
    message: ""
   }
  case "reset":
   return initialState;
  
  default:
   return state;
 }
}

function App() {
 
 const [state, dispatch] = useReducer(reducer, initialState);
 
 const setValue = (e) => {
  const {value, name} = e.target
  dispatch({type: "set_value", payload: {name, value}})
 }
 
 return (
  <>
   <Result result={state.result} message={state.message}/>
   <Inputs a={state.a} b={state.b} changeMethod={setValue}/>
   <Buttons dispatch={dispatch}/>
  </>
 )
}

export default App