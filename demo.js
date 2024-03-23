// Packed vs Holey | JSVU | V-8 Debug

const myArr = [];
// %DebugPrint(myArr)

/* 
Continious and holey array
1) SMI (Small Integer)
2) Packed Elements
3) Double (Float, String, Integer, etc)
*/

const arrayTwo = [1, 2, 3, 4, 5];
// Packed SMI Elements

arrayTwo.push(6.3);
// Packed Double Elements --> Now it has become Packed Double, there is no way to make this array again Packed SMI, even if deleting this step --> As you go further the optimization will get worsen

arrayTwo.push("Seven");
// Packed Elements

arrayTwo[10] = 10;
// Holey Elements

console.log(arrayTwo); // [ 1, 2, 3, 4, 5, 6.3, 'Seven', <3 empty items>, 10 ]
console.log(arrayTwo.length); // 11
console.log(arrayTwo[9]); // undefined
console.log(arrayTwo[19]); // undefined

/* 
How an array find any index value?

Bound check ( In an Holey array ) --> hasOwnProperty(arrayTwo, 9) --> hasOwnProperty(arrayTwo.prototype, 10) --> hasOwnProperty(Object.prototype, 10) 

In an holey array, there are too much difficulties in the optimization. This is the reason Holey arrays are more expensive.


Optimization prescendence
=>
Packed_SMI > Packed_Double > Packed_Elements
Holey_SMI > Holey_Double > Holey_Packed_Elements
*/

// Unoptimized
const arrayThree = new Array(3); // Holey_SMI_Elements --> Less optimized
arrayThree.push[0] = "1"; // Holey_Elements
arrayThree.push[1] = "2"; // Holey_Elements
arrayThree.push[2] = "3"; // Holey_Elements

// Optimized
const newArray = []; // SMI --> More optimized
newArray.push = "1"; // Packed_Elements
newArray.push = "2"; // Packed_Elements
newArray.push = "3"; // Packed_Elements


/* 
NOTE: Use in-built JavaScript methods always rather than making them manually to get your code optimized. For example, forEach(), for in, etc.... 
*/