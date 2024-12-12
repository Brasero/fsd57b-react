// path: message/src/component/List/index.jsx
import "./style.scss";
import {useTextContext} from "../../context/TextContext.jsx";
import Item from "../Item/index.jsx";

const List = () => {
 
 const {state: {messages}} = useTextContext()
 
 return (
  <div className="List">
   {
    messages.length ?
     messages.map((message, i) => <Item key={message.id} message={message} position={i} />)
     :
     <div className={"empty"}> Aucun message à afficher.</div>
   }
  </div>
 )
}

export default List