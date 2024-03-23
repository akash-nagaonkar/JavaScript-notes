/*
    Q. Write a function that retruns the passed string in a alphabetical order?
*/

const isAlphaOrder = (string) => {
    return string.toLowerCase().split("").sort().join("")
  };
  
  console.log(isAlphaOrder("akash")); // aahks
  console.log(isAlphaOrder("Nagaonkar")); // aaagknnor