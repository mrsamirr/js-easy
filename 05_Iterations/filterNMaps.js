// filter  and map 
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10)
// console.log(newNums);

// const ans = myNumers.map(function (i){ // map fn example
//     return i*2;
// })

// console.log(ans)

const newNums = myNumers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter( (num) => num >= 40)

console.log(newNums);


const arr = ["harkirat", "hitesh", "babbar"];

 const ans = arr.filter(function(n){
    if(n.startsWith("h")){
        return true;
    } else return false;
 })

 console.log(ans); 

 const map = (arr, fn) =>{
     let transformArray = [];
     for(let i=0;i<arr.length;i++){
        transformArray.push(fn(arr[i]));
     }
     return transformArray
 } 

 console.log(transformArray);