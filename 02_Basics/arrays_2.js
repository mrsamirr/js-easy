const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

const allHeros = marvel.concat(dc)
console.log(allHeros)

const all_Heros = [...marvel,...dc]

console.log(all_Heros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]] // spread out 

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"})) // cant form array => empty array // interseting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))