/*
Q. You have given a string. How can you reverse a string along with each word?
*/
let greetings = "How have you been up to man?";

let reversedString = greetings
  .split(" ")
  .reverse()
  .map((word) => word.split("").reverse().join(""))
  .join(" ");

console.log(reversedString);
// ?nam ot pu neeb uoy evah woH
