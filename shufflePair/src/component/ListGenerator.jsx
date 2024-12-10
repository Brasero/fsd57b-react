import {generate} from "../utils/generate.js";
import {useState} from "react";
import UnordonateList from "./UnordonateList.jsx";
import OrdonateList from "./OrdonateList.jsx";

const ListGenerator = ( ) => {
 // On prévoit un state pour stocker la list aléatoire générée par la fonction "generate"
 const [unordonateList, setUnordonateList] = useState([])
 
 // Lors du click sur le bouton "Générer une liste" ont appel la fonction "generate" et on enregistre le résultat dans
 // le state, on passera ensuite ce tableau au component "UnordonateList" et "OrdonateList" qui seront chargée de l'afficher
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