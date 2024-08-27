/* 
Q. How can you implement a custom reduce() loop in JavaScript?
*/

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.customReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

const product = numbers.customReduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product); // Output: 120

/* 
Q. How can you use customReduce() to group data by a key?
*/
const data = [
  { city: "pune", id: 7, name: "John", age: 20 },
  { city: "pune", id: 8, name: "Doe", age: 30 },
  { city: "pune", id: 9, name: "Smith", age: 40 },

  { city: "sydney", id: 10, name: "John", age: 20 },
  { city: "sydney", id: 11, name: "Doe", age: 30 },
  { city: "sydney", id: 12, name: "Smith", age: 40 },

  { city: "kolhapur", id: 13, name: "John", age: 20 },
  { city: "kolhapur", id: 14, name: "Doe", age: 30 },
  { city: "kolhapur", id: 15, name: "Smith", age: 40 },
];

const userDataByCity = customReduce(
  data,
  (acc, user) => {
    if (!acc[user.city]) {
      acc[user.city] = [];
    }

    acc[user.city].push(user);

    return acc;
  },
  {}
);

console.log(userDataByCity);
/* 
{
  pune: [
    { city: 'pune', id: 7, name: 'John', age: 20 },
    { city: 'pune', id: 8, name: 'Doe', age: 30 },
    { city: 'pune', id: 9, name: 'Smith', age: 40 }
  ],
  sydney: [
    { city: 'sydney', id: 10, name: 'John', age: 20 },
    { city: 'sydney', id: 11, name: 'Doe', age: 30 },
    { city: 'sydney', id: 12, name: 'Smith', age: 40 }
  ],
  kolhapur: [
    { city: 'kolhapur', id: 13, name: 'John', age: 20 },
    { city: 'kolhapur', id: 14, name: 'Doe', age: 30 },
    { city: 'kolhapur', id: 15, name: 'Smith', age: 40 }
  ]
}
*/

console.log(Object.keys(userDataByCity)); // ["pune", "sydney", "kolhapur"]

console.log(Object.values(userDataByCity)); // [Array(3), Array(3), Array(3)]

for (let i = 0; i < userDataByCity["pune"].length; i++) {
  console.log(userDataByCity["pune"][i].name); // John, Doe, Smith
}


