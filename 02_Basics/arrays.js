// array
 
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "ironman"]
console.log(myHeros)

console.log(myArr[0])

// Array Method

// myArr.push(6)
// myArr.pop()
// console.log(myArr)

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3) // last index excluded
     // in slice the original array remains same
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) // last index included
console.log(myn2)             // in splice , its changes the original array and split out that portion that is included in the index
console.log("C ", myArr)