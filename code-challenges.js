// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

//declare a variable that will take in the object
const outputString = (object) => {
  //establish a variable that will house our mapped object
  let newString = object.map(value => {
    // declare another variable for the object names that are seperated
    let names = value.name.split(" ")
    //map over the names, capitalize the fist letter and then concat them togeter
    let capName = names.map((name) => {
      return name[0].toUpperCase().concat(name.slice(1))
      //re join them word
    }).join(" ")
    //string interpolate the desired output
    return `${capName} is a ${value.occupation}.`
    //combine it all together
  }).join(" ")
  //return the final product
  return newString
}

console.log(outputString(people))




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//declare a function that takes in an array
const remainders = (array) => {
  // create a variable to story a new array that will be filtered to fill with numbers
  let numbersOnly = array.filter(value => {
    // return that the value is in fact a number
    return typeof value === "number"
  })
  // finally return the newly filled array with numbers, map through it and find the remainder of each value when divided by 3
  return numbersOnly.map(number => number % 3)
}

console.log(remainders(testingArray1));
console.log(remainders(testingArray2));




// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

//declare a variable that iterates over an array
const noDupes = (...array) => {
  //seta variable to house a new empty array and concat it with the second array
  let newArray = [].concat(...array)
  //return that new array and filter through for the value and index
  //as it filters it will check if the values index matches with the original index of that value if it is the first instance of that value it keeps. If it is a second instance it will discard it.
  return newArray.filter((value, index) => newArray.indexOf(value) === index)
}
console.log(noDupes(testingArray3, testingArray4))
a