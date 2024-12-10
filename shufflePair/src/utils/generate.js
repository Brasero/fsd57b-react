// Fonction "generate" : génère une liste de nombres uniques aléatoires
// Elle prend un paramètre "amount" qui définit le nombre d'éléments à générer (par défaut 2)
export const generate = (amount = 2) => {
 // Initialisation d'un tableau vide pour stocker les nombres générés
 const list = [];
 
 // Boucle qui s'exécute de 0 jusqu'à "amount" exclus
 for (let i = 0; i < amount; i++) {
  // Génération d'un nombre aléatoire
  let num = generateNumber();
  
  // Tant que le nombre généré existe déjà dans "list" (pour éviter les doublons)
  while (list.includes(num)) {
   // Génère un nouveau nombre aléatoire
   num = generateNumber();
  }
  
  // Ajoute le nombre unique au tableau "list"
  list.push(num);
 }
 
 // Retourne le tableau contenant les nombres générés
 return list;
};

// Fonction "generateNumber" : génère un nombre entier aléatoire entre 0 et 19
const generateNumber = () => {
 // Utilise Math.random() pour obtenir un nombre décimal entre 0 et 1
 // Multiplie ce nombre par 21 pour obtenir un nombre entre 0 et 20.999...
 // Math.floor() arrondit à l'entier inférieur pour avoir un entier entre 0 et 20
 return Math.floor(Math.random() * 21);
};