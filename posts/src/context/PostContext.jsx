import {createContext, useContext} from "react";
import {usePostsReducer} from "../store/index.jsx";


export const PostContext = createContext()


export const PostProvider = ({ children }) => {
 
 const postContext = usePostsReducer()
 
 return (
  <PostContext.Provider value={postContext}>
   { children }
  </PostContext.Provider>
 )
}

export const usePostContext = () => useContext(PostContext)