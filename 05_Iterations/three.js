//  for of

// ["", "", ""]
//  [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}

//  Maps

const map = new Map(); // maps have unique values
map.set('IN', "INDIA")
map.set('IN', "INDIA")
map.set('PAK', "PAKISTAN")
map.set('USA', "UNITED STATES")


// console.log(map)
 
for(const [key,value] of map){ // for of on map
    console.log(key,':-', value)
}

const myObject = {
    name: "John",
    age: 30,
    city: "New York"
}

// for(const [key,value] of myObject){ // objects are not iterable here
//     console.log(key,':-', value);
// }