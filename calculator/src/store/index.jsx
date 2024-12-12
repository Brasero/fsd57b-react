import {useReducer} from "react";

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

export const useCalculator = () => useReducer(reducer, initialState);