const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 123.8966

console.log(num.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++ MATHS ++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6)) // round
// console.log(Math.ceil(4.6)) // top
// console.log(Math.floor(4.6)) // lower
// console.log(Math.sqrt(36)) 
// console.log(Math.min(3,4,6)) 

console.log(Math.random())  // value gives from the range b/w from 0 to 1
console.log((Math.random()*10) + 1) 
console.log(Math.floor(Math.random()*10) + 1) 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)