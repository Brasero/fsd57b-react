import {generate} from "../utils/generate.js";
import {useState} from "react";
import UnordonateList from "./UnordonateList.jsx";
import OrdonateList from "./OrdonateList.jsx";

const ListGenerator = ( ) => {
 
 const [unordonateList, setUnordonateList] = useState([])
 
 const handleGenerate = () => {
  const list = generate(10)
  setUnordonateList(list)
 }
 
 return <>
  <UnordonateList list={unordonateList} />
  <button onClick={handleGenerate}>Générer une liste</button>
  <OrdonateList list={unordonateList} />
 </>
}

export default ListGenerator;