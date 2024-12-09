const numbers = [1,2,3,4];

const powerNumber = numbers.map((num, i) => {
 return num ** 2;
})

console.log(powerNumber);

const total = numbers.reduce((acc, curr) => {
 if (curr % 2 !== 0) {
  return acc + curr
 }
 return acc
}, 0)

console.log(total);
let value;
function increment() {
 value = 14; // Value existe, car elle a été déclarée dans le scope du fichier.
 
 let word = "Hello";
 
}


console.log(word); // Cette variable n'existe pas en dehors du scope de la fonction "increment"
increment();

console.log(value);