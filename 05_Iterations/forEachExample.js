const coding = ['js', 'rb', 'py', 'cpp', 'swift']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "python",
        languageFileName: "py"
    },
    {
        language: "cPlusPLus",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
   console.log(item.language);
})