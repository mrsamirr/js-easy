let  a = 10
const b = 20
var c = 30


function one(){
    const username = "hitesh"

    function two(){
         const website = "youtube"
         console.log(username)
    }
    // console.log(website);
    // two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting +++++++++++++++++++++

console.log(addone(6));
function addone(num){ // function declaration
    return num + 1
}


addTwo(6)
const addTwo = function(num){ //   function expression
    return num + 2
}
