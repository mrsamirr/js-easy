const name = "samirr"
const repoCount = 50

// console.log(name + repoCount + " Value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // output => {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); // finding character index value
console.log(gameName.indexOf('t')); // finding the character index 

const newString = gameName.substring(0, 4)
console.log(newString);  // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // ite

const newStringOne = "  samir   "
// console.log(newStringOne);
// console.log(newStringOne.trim()) // trim out all spaces

const url = "https://samir.com/samir%20ansari"

console.log(url.replace('%20', '-')) // replace value in a string

console.log(url.includes('samir')) // return boolean true/false

console.log(gameName.split('-'))


