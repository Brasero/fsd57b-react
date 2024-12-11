import {useEffect, useReducer} from "react";


const initialState = {
 count: 0,
 message: "",
 toto: ""
}

const reducer = (state, action) => {
 switch(action.type) {
  case 'incr':
   return {
    ...state,
    count: state.count + action.payload
   }
  case "decr":
   return {
    ...state,
    count: state.count - action.payload
   }
   
  case "set_message":
   return {
    ...state,
    message: action.payload
   }
  case "reset_message":
   return {
    ...state,
    message: initialState.message
   }
  default:
   return state
 }
}

const Counter = () => {
 
 const [state, dispatch] = useReducer(reducer, initialState);
 
 
 useEffect(() => {
  if (state.count >= 5) {
   dispatch({type: "set_message", payload: "Nombre supérieur à 5"})
  } else {
   dispatch({type: "reset_message"})
  }
 }, [state.count])
 
 return(
  <>
   <h1>Counter : {state.count}</h1>
   {state.message !== "" && <p>{state.message}</p>}
   <div>
    <button onClick={() => dispatch({type: "incr", payload: 1})}>+1</button>
    <button onClick={() => dispatch({type: "decr", payload: 1})}>-1</button>
    <button onClick={() => dispatch({type: "incr", payload: 5})}>+5</button>
    <button onClick={() => dispatch({type: "decr", payload: 5})}>-5</button>
   </div>
  </>
 )
}


export default Counter