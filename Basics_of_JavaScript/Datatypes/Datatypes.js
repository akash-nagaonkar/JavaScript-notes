/* 
Primitive Datatypes => String, Number, Boolean, null, undefined, Symbol, BigInt

Reference or non-primitive datatypes => Arrays, Objects and Functions
*/

// String
const name = "akash nagaonkar";

// Number
const age = 24;

// Boolean
const isLoggedIn = false;

// Null
let data = null;

// Undefined
let email;

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id == anotherId); // False

// BigInt
let bigNumber = 12345678901234567n;

// Arrays
const heroes = ["Ironman", "Spiderman", "Thor", "Captain America"];

// Objects
const employee = {
  employeeId: 123234,
  name: "xyz",
};

// Functions
const addNumber = (a, b) => {
  return a + b;
};
addNumber(10 + 20);

function addNumber2(x, y) {
  return x + y;
}

addNumber2(20 + 40);
