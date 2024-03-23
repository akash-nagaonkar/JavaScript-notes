/* 
    Q. Create a function to reverse a Number
*/

// Optimized way
const reverseNumber = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};

const number = reverseNumber(123322);
console.log(typeof number);

console.log(number);
// 221121


// Not optimized way
const reverseTheNumber = (number) => {
  var reverse = 0;
  while (number > 0) {
    var rem = number % 10;
    reverse = reverse * 10 + rem;
    number = Math.floor(number / 10);
  }
  return reverse;
};

const numberIs = reverseTheNumber(9383);
console.log(numberIs);
// 3839
