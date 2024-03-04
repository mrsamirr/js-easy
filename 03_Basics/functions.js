 function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("R");
 }

//  sayMyName();

// function addNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

 function addNumbers(num1, num2) {
  //  let result = num1 + num2;
  //   return result;
  return num1 + num2;
  }
  //  console.log(addNumbers(2, 3)); // Output: 5


  function loginUserMessage(username = "sam"){
    if(!username){
      console.log("Please provide a username");
      return;
    }
    return `${username} just logged in`;
  }

  console.log(loginUserMessage());

  function calculateCartPrice(...num1){
    return num1;
  }

  console.log(calculateCartPrice(10,20,30)); 

  const user = {
    username: "samir",
    price: 199
  }

  function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
  }

  // handleObject(user);

  handleObject({
    username: "sam",
    price: 399
  })

  const myNewArray = [200, 300, 400, 500]

  function returnSecondValue(getArray){
    return getArray[1];
  }

  // console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 300, 400, 500]));