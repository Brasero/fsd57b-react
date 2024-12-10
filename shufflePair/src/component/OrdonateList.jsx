import { useState, useEffect } from 'react';

const OrdonateList = ({ list = [] }) => {
 // Définition d'une constante pour stocker le nombre d'éléments dans le tableau "list"
 const VALUE_AMOUNT = list.length;
 
 // Déclaration de l'état "ordonateList" avec une valeur initiale de tableau vide
 // "ordonateList" contiendra la liste triée
 const [ordonateList, setOrdonateList] = useState([]);
 
 // Déclaration de l'état "shownList" avec une valeur initiale de tableau vide
 // "shownList" contiendra les éléments à afficher progressivement
 const [shownList, setShownList] = useState([]);
 
 // Déclaration de l'état "intervalID" avec une valeur initiale de 0
 // "intervalID" stockera l'identifiant du minuteur pour pouvoir le nettoyer plus tard
 const [intervalID, setIntervalID] = useState(0);
 
 // Utilisation de useEffect pour surveiller les changements de la prop "list"
 useEffect(() => {
  // Si la liste n'est pas vide
  if (VALUE_AMOUNT !== 0) {
   // Tri du tableau "list" par ordre croissant
   const newList = list.sort((a, b) => a - b);
   // Mise à jour de l'état "ordonateList" avec la liste triée
   setOrdonateList(newList);
   // Réinitialisation de "shownList" à un tableau vide
   setShownList([]);
   // Si un minuteur est déjà en cours, on l'arrête
   if (intervalID) clearTimeout(intervalID);
  }
 }, [list]); // Ce useEffect se déclenche à chaque fois que "list" change
 
 // Utilisation de useEffect pour surveiller les changements de "ordonateList"
 useEffect(() => {
  // Si "ordonateList" n'est pas vide
  if (ordonateList.length !== 0) {
   // Définition d'un minuteur qui s'exécute après 1 seconde (1000 ms)
   const ID = setTimeout(() => {
    // Copie de "ordonateList" pour éviter de modifier directement l'état
    const referencalList = [...ordonateList];
    // Suppression du premier élément de "referencalList" et stockage dans "valueToInsert"
    const valueToInsert = referencalList.shift();
    // Mise à jour de "ordonateList" sans le premier élément
    setOrdonateList(referencalList);
    // Ajout de "valueToInsert" à "shownList" pour l'afficher
    setShownList([...shownList, valueToInsert]);
   }, 1000);
   // Stockage de l'identifiant du minuteur dans "intervalID"
   setIntervalID(ID);
  } else {
   // Si "ordonateList" est vide et qu'un minuteur est en cours
   if (intervalID) {
    // Arrêt du minuteur
    clearTimeout(intervalID);
    // Réinitialisation de "intervalID" à 0
    setIntervalID(0);
   }
  }
 }, [ordonateList]); // Ce useEffect se déclenche à chaque fois que "ordonateList" change
 
 // Rendu du composant
 return (
  <>
   <h2>Liste ordonnée</h2>
   {
    // Si "shownList" n'est pas vide, on affiche les éléments
    shownList.length !== 0 ?
     shownList.map((num, i) => <span key={i}>{num}, </span>)
     :
     // Sinon, si "list" n'est pas vide, on indique que le tri est en cours
     VALUE_AMOUNT !== 0 ?
      <span>Triage en cours</span>
      :
      // Sinon, on indique qu'il n'y a aucune valeur à afficher
      <span>Aucune valeur à afficher</span>
   }
  </>
 );
}

export default OrdonateList;