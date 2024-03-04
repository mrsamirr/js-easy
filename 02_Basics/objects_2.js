// const tinderUser = new Object() // singleton
const tinderUser = {}  // non singleton

tinderUser.id = "tinder123"
tinderUser.name = "Samir"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = { // nested object
    email: "samir@google.com",
    isLoggedIn: true,
     uniqueUser : {
        id: "unique123",
        name: "Unique User",
        isLoggedIn: false
    }
}

// console.log(regularUser.uniqueUser.id); // object inside object access

const obj1 = {
   1: "a",
   2: "b",
}

const obj2 = {
   3: "c",
   4: "d",
}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3.obj2[3]); // a


const users = [ // keys are array index => 0,1,2
   {
      id: 1,
      name: "Samir",
      email: "sm@gmail.com"
   },
   {
      id: 1,
      name: "Samir",
      email: "sm@gmail.com"
   },
   {
      id: 1,
      name: "Samir",
      email: "sm@gmail.com"
   },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(users));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

var student = { // object name
   firstName: "Koushik", // list of keys and values
   lastName: "Sadhu",
   age: 20,
   height: 175,
   fullName: function() { // object function
   return this.firstName + " " + this.lastName;
   }
  };
  
  console.log(student.fullName()); // Koushik Sadhu