// path: calculator/src/component/NumberButtons/index.jsx
import "./style.scss";

const NumberButtons = () => {
 
 const buttonsArray = Array.from(Array(10).keys())
 
 return (
  <>
   {
    buttonsArray.reverse().map((i) => {
     return <button className={"button__number"}>{i}</button>
    })
   }
  </>
 )
}

export default NumberButtons