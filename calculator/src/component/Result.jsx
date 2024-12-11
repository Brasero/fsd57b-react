const Result = ({result, message = ""}) => {
 return (
  <div className={"display"}>
   <span className={"text"}>Résultat : </span><span>{result}</span>
   {message !== "" && <div style={{color: "red"}}>{message}</div>}
  </div>
 )
}

export default Result;