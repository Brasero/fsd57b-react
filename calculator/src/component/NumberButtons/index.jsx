// path: calculator/src/component/NumberButtons/index.jsx
import "./style.scss";

const NumberButtons = ({onClick}) => {
 
 const buttonsArray = Array.from(Array(10).keys())
 
 return (
  <>
   {
    buttonsArray.reverse().map((i) => {
     return <button key={i} onClick={() => onClick(i)} className={"button__number"}>{i}</button>
    })
   }
  </>
 )
}

export default NumberButtons