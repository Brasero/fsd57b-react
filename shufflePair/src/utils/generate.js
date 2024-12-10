export const generate = (amount = 2) => {
 const list = []
 for (let i = 0; i <= amount; i++) {
  let num = generateNumber()
  while (list.includes(num)) {
   console.log(num)
   num = generateNumber()
  }
  console.log(num)
  list.push(num)
 }
 
 return list;
}

const generateNumber = () => {
 return Math.floor(Math.random() * 20);
}