/*
    Q. Create a function to check is the given number palindrome or not?
*/

const isPalindrome = (number) => {
  const reversedNumber = Number(number.toString().split("").reverse().join(""));
  return reversedNumber === number
    ? "This is palindrome numner!"
    : "Not a palindrome numner!";
};

console.log(isPalindrome(111));
// This is palindrome numner!