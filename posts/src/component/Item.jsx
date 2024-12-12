import {usePostContext} from "../context/PostContext.jsx";

const Item = ({post}) => {
 
 const [_, dispatch] = usePostContext()
 
 const handleDelete = () => {
  dispatch({type: "delete_article", payload: post.id})
 }
 
 return (
  <li>
   <span>Titre : {post.title}</span>
   <br/>
   <span>Contenu : {post.content}</span>
   <button onClick={handleDelete} style={{background: "red", color: "white"}}>X</button>
  </li>
 )
}

export default Item;