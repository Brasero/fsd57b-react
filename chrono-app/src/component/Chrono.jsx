import {useEffect, useState} from "react";

// Chrono s'attend à recevoir
const Chrono = ({step = 1, cyclique = false}) => {
 // State du compteur
 const [counter, setCounter] = useState(0)
 // State du cycle
 const [cycle, setCycle] = useState(0)
 // State utile pour les boutons de contrôle
 const [disabled, setDisabled] = useState(false)
 // State pour garder en mémoire l'ID du setInterval
 const [intervalID, setIntervalID] = useState(0)
 // Valeur maximale que le compteur peut atteindre avant de s'arrêter ou de compter un nouveau cycle
 const MAX_VALUE = 20;
 
 // Fonction de reset
 const reset = () => {
  // On appel la fonction "stop" afin d'arrêter l'intervalle
  stop()
  // On remet la valeur du compteur à 0.
  setCounter(0)
  // Si l'option "cyclique" est à "true" on remet le cycle à 0 également
  if (cyclique) {
   setCycle(0)
  }
 }
 
 // Fonction de lancement du chrono
 const start = () => {
  // On bloque le bouton start et on débloque le bouton stop
  setDisabled(true)
  // On a défini un interval de 1s pour l'incrémentation du compteur et on enregistre l'ID du setInterval
  let intervalIDNum = setInterval(() => {
   setCounter((prevState) => prevState + step)
  }, 1000)
  // On enregistre l'ID du setInterval dans le state "intervalID"
  setIntervalID(intervalIDNum)
 }
 
 // Fonction d'arrêt du compteur
 const stop = () => {
  // On débloque le bouton start et on bloque le bouton stop
  setDisabled(false)
  // On arrête l'intervalle
  clearInterval(intervalID)
  // On supprime l'ID de l'intervalle
  setIntervalID(0)
 }
 
 // useEffect est un Hook React permettant d'intéragir avec le cycle de vie d'un component.
 // Il existe trois phases dans le cycle de vie d'un component :
 // - Le montage (Le component apparait à l'écran alors qu'il n'était pas là avant)
 // - Le démontage (Le component disparait de l'écran tandis qu'il était apparent)
 // - Le changement d'état (Un state du component change de valeur)
 // Ici, je vise le changement d'état, tout particulièrement le changement de valeur du state "counter" en l'ajoutant au
 // tableau de dépendance placé en second argument de l'appel du useEffect ([counter]).
 // À chaque fois que la valeur de "counter" change la fonction de callback passé en premier argument est éxecutée.
 useEffect(() => {
  // on vérifie si "counter" a atteint ou dépassé la valeur maximale possible
  if (counter >= MAX_VALUE) {
   // Si oui, on vérifie si le compteur est cyclique
   if (!cyclique) {
    // Si le compteur n'est pas cyclique on l'arrête
    stop()
    return
   }
   // Si le compteur est cyclique, on remet la valeur de "counter" à 0 et on incrémente "cycle"
   setCycle((prevState) => prevState + 1)
   setCounter(0)
  }
 }, [counter]);
 
 return <>
  <p>Counter : {counter}</p>
  {cyclique && <p>Cycle : {cycle}</p>}
  <button disabled={disabled} onClick={start}>Start (+{step})</button>
  <button disabled={!disabled} onClick={stop}>Stop</button>
  <button disabled={counter === 0 && cycle === 0} onClick={reset}>Reset</button>
 </>
}

export default Chrono