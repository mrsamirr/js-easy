// Immediately Invoked Function Expression (IIFE)


(function chai(){ // global scope ke pollution se bachne ke liye
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE (Simple IIFE)
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')