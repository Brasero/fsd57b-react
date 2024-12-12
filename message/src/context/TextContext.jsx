import {createContext, useContext} from "react";
import {useTextReducer} from "../store/useTextReducer.jsx";

const TextContext = createContext();

export const TextProvider = ({children}) => {
 
 const context = provideTextContext()
 
 return <TextContext.Provider value={context}>
  {children}
 </TextContext.Provider>
}


const provideTextContext = () => {
 const [state, dispatch] = useTextReducer()
 
 const handleValueChange = (name, value) => {
  dispatch({
   type: "set_value",
   payload: {name,value}
  })
 }
 
 const handleAdd = () => {
  dispatch({
   type: "add_message"
  })
 }
 
 const handleDelete = (id) => dispatch({type: "remove_message", payload: id})
 
 
 return {
  state,
  handleDelete,
  handleAdd,
  handleValueChange
 }
}


export const useTextContext = () => useContext(TextContext)