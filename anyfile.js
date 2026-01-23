// node anyfile.js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vowels = ['a', 'e', 'i', 'o', 'u']
process.title = 'BASICS SERVER'

// setTimeout(() => console.log( arr[ictr] ), 1000);
// for (let ictr = 0; ictr < 10; ictr++) { console.log(arr[ictr]) }

let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
console.log(Object.keys(obj)); 
console.log(Object.values(obj)); 

const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) { count++ }
  }
  return count
}
console.log(findVowels("Hello World")); // 3	
