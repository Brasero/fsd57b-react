import {useReducer} from "react";

let id = 0;
const initialMessage = {
 id: id++,
 text: "",
 color: "palevioletred",
 size: 15
}
const initialState = {
 message: initialMessage,
 messages: [],
 error: ""
}

const reducer = (state, action) => {
 switch(action.type) {
  case "set_value":
   return {
    ...state,
    message: {
     ...state.message,
     [action.payload.name]: action.payload.value
    },
    error: ""
   }
  
  case "add_message":
   return state.message.text !== "" ? {
    ...state,
    message: {...initialMessage, id: id++},
    messages: state.messages.concat([state.message])
   } : {
    ...state,
    error: "Merci de saisir un texte avant de valider"
   }
   
  case "remove_message":
   return {
    ...state,
    messages: state.messages.filter((mes) => mes.id !== action.payload),
    error: ""
   }
  
  default:
   return state;
 }
}

export const useTextReducer = () => useReducer(reducer, initialState);