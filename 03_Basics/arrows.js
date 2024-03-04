const user = {
    username: "samir",
    price: 999,

    welcomeMessage: function(){ // use of this => current context ko refer karta hai
        console.log(`${this.username} , welcome to the website`);
        // console.log(this); // this current context ko refer karta hai
    }

}

// user.welcomeMessage() // samir , welcome to the website
user.username = "sam";
// user.welcomeMessage();

// console.log(this); // {} // global context ko refer karta hai   

// function chai(){ // 
//     let username = "samir";
//      console.log(this.username);
// }

// chai()

const chai = () =>{ // arrow function me this global context ko refer karta hai
    let username = "samir";
    console.log(this.username);
}

// chai()

// const addTwo = (num1,num2) => { // explicit return
//    return num1 + num2;
// }
// console.log(addTwo(2,3)); // 5

// const addTwo = (num1,num2) =>  num1 + num2 // implicit return

// const addTwo = (num1,num2) =>  (num1 + num2) // implicit return

const addTwo = (num1,num2) => ({ username : "hitesh"} )// undefined

console.log(addTwo(2,3)); // 5

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()