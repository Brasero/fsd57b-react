import {useEffect, useState} from "react";

const OrdonateList = ({list = []}) => {
 const VALUE_AMOUNT = list.length
 const [ordonateList, setOrdonateList] = useState([])
 const [shownList, setShownList] = useState([])
 const [intervalID, setIntervalID] = useState(0)
 
 useEffect(() => {
  if (VALUE_AMOUNT !== 0) {
   const newList = list.sort((a, b) =>  b - a)
   setOrdonateList(newList)
   setShownList([])
  }
 }, [list]);
 
 useEffect(() => {
  if(ordonateList.length !== 0) {
   const ID = setTimeout(() => {
    const referencalList = [...ordonateList]
    const valueToInsert = referencalList.pop()
    setOrdonateList(referencalList)
    setShownList([...shownList, valueToInsert])
   }, 1000)
   setIntervalID(ID)
  } else {
   if (intervalID) {
    clearTimeout(intervalID)
    setIntervalID(0)
   }
  }
 }, [ordonateList]);
 
 
 return <>
  <h2>Liste ordonnée</h2>
  {
   shownList.length !== 0 ?
    shownList.map((num, i) => <span key={i}>{num}, </span>)
    :
    list.length !== 0 ?
     <span>Triage en cours</span>
     :
     <span>Aucune valeur à afficher</span>
   
  }
 </>
 
}

export default OrdonateList