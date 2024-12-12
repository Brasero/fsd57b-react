// path: message/src/component/Item/index.jsx
import "./style.scss";
import {useTextContext} from "../../context/TextContext.jsx";

const Item = ({message, position}) => {
 
 const {handleDelete} = useTextContext()
 
 const handleClick = () => {
  handleDelete(message.id)
 }
 
 return (
  <div className="Item">
   <h3>Message {position + 1}</h3>
   <div className="text"
    style={{
     color: message.color,
     fontSize: `${message.size}px`
    }}
   >
    {message.text}
   </div>
   <button onClick={handleClick} style={{background: "red"}}>Supprimer</button>
  </div>
 )
}

export default Item