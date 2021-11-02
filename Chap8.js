const word = prompt("What is your favorite word?");
const len = word.length;
console.log(len);

console.log(`The letter count${len} characters long`);
console.log(`${word} in lowercase is ${word.toLowerCase()}`);
console.log(`${word} in uppercase is ${word.toUpperCase()}`);