// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
// create a function named boilPoint that uses if/else conditional
const boilPoint = (value) => {
//if the value is below 212 return `${value} is below boiling point`
  if (value < 212) {
    return `${value} is below boiling point`
//if the value is 212 return `${value} is at boiling point`
  } else if ( value === 212) {
    return `${value} is at boiling point`
// in any other case the value must be above 212 so return `${value} is above boiling point`
  } else {
    return `${value} is above boiling point`
  }
}
//log the functions and enter the arrays
console.log(boilPoint(temp1));
console.log(boilPoint(temp2));
console.log(boilPoint(temp3));




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
// function named mult5 that will contain a for loop
const mult5 = (array) => {
// create new array for the multiplied numbers here
  let newArray = []
// loop here that runs through the array
for (var i = 0; i < array.length; i++) {
// multiply each value of array by 5 here and push into newArray
  newArray.push(array[i] * 5)
}
// return outside of loop but still inside function here
return newArray
}
// log the function and enter the array
console.log(mult5(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
// similar logic to the last question but no need for loop or creation of a new array
const multBy5 = (array) => {
//nest .map() here to multiply each value of array by 5
  return array.map((value) => {
   return (value *5)
})
}
//log the function and enter the array
console.log(multBy5(myNumbers2));


// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]
// create a function that accepts array
const oddIndex = (array) => {
// return high order function that accepts value and index of array & then returns the values of odd indexes
  return array.filter((value, index) => index % 2 !== 0)
}
//log the function and enter the array
console.log(oddIndex(coffeeRun));


// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


const vowelOnly = (string) => {
  let arrayVowel = string.split("")
  return arrayVowel.filter(value => value !== "a" && value !== "A" && value !== "e" && value !== "E" && value !== "i" && value !== "I" && value !== "o" && value !== "O" && value !== "u" && value !== "U").join("")
}

console.log(vowelOnly(stringWithVowels1));
console.log(vowelOnly(stringWithVowels2));


// --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.
var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"

const vowelOnly2 = (string) => {
  if(typeof string === "string") {
    let arrayVowel = string.split("")
    return arrayVowel.filter(value => value !== "a" && value !== "A" && value !== "e" && value !== "E" && value !== "i" && value !== "I" && value !== "o" && value !== "O" && value !== "u" && value !== "U").join("")
  } else {
  return "This is not a string" }
}

console.log(vowelOnly2(stringWithVowels3));
console.log(vowelOnly2(stringWithVowels4));
console.log(vowelOnly2(stringWithVowels5));
