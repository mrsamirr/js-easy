// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3345346596326946546n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["ironman","thor","dr strange","hulk","spiderman"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // function object
    console.log("Hello World")
}

console.log(typeof outsideTemp); // non primitive data types are always object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "unusualsmasher"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);