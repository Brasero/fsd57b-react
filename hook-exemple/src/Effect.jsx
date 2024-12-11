import {useEffect, useState} from 'react'
import './App.css'

function Effect() {
 const MAX_VALUE = 12;
  const [count, setCount] = useState(0)
 const [counter, setCounter] = useState(0)
 
 useEffect(() => {
  console.log(count)
  if ( count >= MAX_VALUE) {
  
  }
  
  return () => {
   setCount(0)
  }
 }, [counter]); // Precise quans l'effet doit etre effectué, içi il s'effectuera au montage et lorsque "counter" change de valeur
  
  useEffect(() => {
   return () => { // La fonction qui est return s'appel une fonction de nettoyage (cleanup)
    console.log("unmount");
   }
  }, []) // Ici l'effet ne s'effectuera qu'au démontage du component
 
 
  

  return (
    <>
     
     <button onClick={() => setCount(count+1)}>click</button>
     <button onClick={() => setCounter(counter+1)}>click counter</button>
     
    </>
  )
}

export default Effect