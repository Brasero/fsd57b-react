import Item from "./Item.jsx";
import {usePostContext} from "../context/PostContext.jsx";

const List = () => {
 
 const [{posts}] = usePostContext();
 
 
 
 
 return (
  <ul>
   {posts.map((post, i) => {
    return <Item key={i} post={post} />
   })}
  </ul>
 )
}

export default List