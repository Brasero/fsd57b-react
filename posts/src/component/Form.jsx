import {useContext} from "react";
import {PostContext, usePostContext} from "../context/PostContext.jsx";

const Form = () => {
 
 //const [state, dispatch] = useContext(PostContext);
 const [state, dispatch] = usePostContext();
 
 const {post} = state;
 
 const handleSubmit = (e) => {
  e.preventDefault()
  dispatch({type: "add_article"})
 }
 
 const handleChange = (e) => {
  const {name, value} = e.target
  
  dispatch({type: "set_value", payload: {name, value}})
 }
 
 return (
  <form onSubmit={handleSubmit}>
   <input onChange={handleChange} type="text" value={post.title} name={"title"}/>
   <textarea onChange={handleChange} name={"content"} value={post.content} />
   <button role={"button"}>Enregistrer</button>
  </form>
 )
}

export default Form;