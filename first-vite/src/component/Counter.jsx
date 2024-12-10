import { useState } from "react";
import Button from "./Button.jsx";

const Counter = () => {
 const [counter, setCounter] = useState(0)
 
 const increment = () => {
  setCounter(counter + 1)
 }
 
 const decrement = () => {
  setCounter(counter - 1)
 }
 
 const reset = () => {
  setCounter(0)
 }
 
 return <>
  <p>Counter : {counter}</p>
  <Button fn={increment} text={"+1"} />
  <Button fn={decrement} text={"-1"} />
  <Button fn={reset} text={"reset"} />
 </>
}

export default Counter