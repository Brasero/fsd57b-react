const Buttons = ({dispatch}) => {
 
 return (
  <>
   <button onClick={() => dispatch({type: "calc", payload: "+"})}>+</button>
   <button onClick={() => dispatch({type: "calc", payload: "*"})}>*</button>
   <button onClick={() => dispatch({type: "reset"})}>reset</button>
  </>
 )
}

export default Buttons