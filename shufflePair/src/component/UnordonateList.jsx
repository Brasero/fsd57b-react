const UnordonateList = ({list = []}) => {
 
 
 return <div>
  <h2>Liste non ordonnée</h2>
  {
   // On vérifie simplement la taille du tableau "list" afin de savoir si on a des valeurs à afficher.
   list.length ?
    list.map((num, i) => <span key={i}>{num}, </span>)
    :
    <span>Aucune valeur dans la liste</span>
  }
 </div>
}

export default UnordonateList