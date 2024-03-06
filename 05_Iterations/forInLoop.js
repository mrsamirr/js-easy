//  for in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){ // for in loop
    console.log(`${key} is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "cpp", "swift"]

for(const key in programming){
    console.log(`${key} is for ${programming[key]}`);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }