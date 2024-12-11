const Inputs = ({a, b, changeMethod}) => {
 
 return (
  <div className={"inputs"}>
   <input type="number" name={"a"} value={a} onChange={changeMethod} />
   <input type="number" name={"b"} value={b} onChange={changeMethod} />
  </div>
 )
}

export default Inputs