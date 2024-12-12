import {useContext} from "react";
import {PostContext, usePostContext} from "../context/PostContext.jsx";

const Form = () => {
 
 const categoryList = [
  "Beauté",
  "Décoration",
  "Cuisine"
 ]
 
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
   <select value={post.category} name={"category"} onChange={handleChange}>
    <option value={""}>----</option>
    {
     categoryList.map((cat, i) => {
      return <option key={i} value={cat}>{cat}</option>
     })
    }
   </select>
   <button role={"button"}>Enregistrer</button>
  </form>
 )
}

export default Form;