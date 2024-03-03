// singleton
// object.create


// objects literals

const mySum = Symbol("key1")


const JsUser = {
    name: "Samir",
    [mySum]: "mykey1", // symbol use
    age: 20,
    location: "West Bengal",
    email: "samir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["name"])
// console.log(JsUser[mySum])

JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser) // freze the object => can't change the object value

JsUser.email = "samir@openai.com" // not changed
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())