import {useReducer} from "react";

let id = 0;

const initialState = {
 post: {
  id: id++,
  title: "",
  content: ""
 },
 posts: []
}

const reducer = (state, action) => {
 switch (action.type) {
  case "set_value":
   return {
    ...state,
    post: {
     ...state.post,
     [action.payload.name]: action.payload.value
    }
   }
   
  case "add_article":
   return state.post.title !== "" && state.post.content !== "" ?
    {
     ...state,
     post: {
      id: id++,
      title: "",
      content: ""
     },
     posts: state.posts.concat([state.post])
    }
    :
    state;
   
  case "delete_article":
   return {
    ...state,
    posts: state.posts.filter((post) => post.id !== action.payload)
   }
  
  
  default:
   return state;
 }
}

export const usePostsReducer = () => useReducer(reducer, initialState)