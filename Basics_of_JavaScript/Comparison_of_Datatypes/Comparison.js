console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true --> Null is being converted into 0 => 0 >= 0
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
/* 
NOTE: Try to avoid these types of comparison code
*/

console.log("2" === 2); // false --> It will check datatype => String == Number

