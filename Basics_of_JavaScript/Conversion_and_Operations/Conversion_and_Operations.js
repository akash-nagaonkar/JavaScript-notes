// Conversion and operations of datatypes

// ********** Conversion ************* //

// Conversin in Number
let score = "33"; // You know that this is a number but as you go further in code you will not know what is the datatype of score. For that reason you need convert it as per your need.

console.log(typeof score); // string
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof score); // string
console.log(typeof valueInNumber); // number

// Alphabetical and numerical values
let score2 = "33abc";

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN --> Not a Number

// Null
let score3 = null;

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0

// Undefined
let score4 = undefined;

let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // NaN

// Boolean Values = true and false
let boolean1 = true;
let boolean2 = false;

let booleanInNumber1 = Number(boolean1);
console.log(typeof booleanInNumber1); // number
console.log(booleanInNumber1); // 1

let booleanInNumber2 = Number(boolean2);
console.log(typeof booleanInNumber2); // number
console.log(booleanInNumber2); // 0

/*
"33" => 33 - number
"33abc" => NaN - Not a Number
true => 1
false => 0
*/

// Conversion in Boolean
let isLoggedOut = 0

let booleanValue = Boolean(isLoggedOut)
console.log(typeof booleanValue); // boolean
console.log(booleanValue); // false

let isLoggedIn = 1

let booleanValue1 = Boolean(isLoggedIn)
console.log(typeof booleanValue1); // boolean
console.log(booleanValue1); // true

let emptyString = ""

let booleanValue2 = Boolean(emptyString)
console.log(typeof booleanValue2); // boolean
console.log(booleanValue2); // false


let name = "akash"
let booleanValue3 = Boolean(name)
console.log(typeof booleanValue3); // boolean
console.log(booleanValue3); // true

let number = 24
let booleanValue4 = Boolean(number)
console.log(typeof booleanValue4); // boolean
console.log(booleanValue4); // true

/* 
1 => true
0 => false
"" => false
"akash" => true
24 => true
*/

// Conversion in String
let amount = 2000

let stringValue = String(amount)
console.log(typeof stringValue); // string
console.log(stringValue); // 2000

// ************ Operations *************** //

let value = 3
let negValue = -value
console.log(negValue); // -3

let str1 = "Hello"
let str2 = " akash"
let str3 = str1 + str2
console.log(str3); // Hello akash

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(typeof(1 + 2 + "2")); // string


console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 100

gameCounter++
console.log(gameCounter); // 101

++gameCounter
console.log(gameCounter); // 102

gameCounter--
console.log(gameCounter); // 101