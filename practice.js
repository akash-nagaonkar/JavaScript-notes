/*
    Q. Write a function that retruns the passed string in a alphabetical order?
*/

const { log } = require("console")

// const quote = new String(
//   "Every step of your life will demand different version of you!"
// );

// const stringCapitalized = (string) => {
//   return string.split(" ").map((word, index) => {
//     const letter = word.split("");
//   });
// };

// console.log(stringCapitalized(quote));

// const gamenName = new String ('shubham')

// console.log(gamenName.charAt(5));
// console.log(gamenName.indexOf('h'));

// const newString = gamenName
// console.log(newString);


// const url = "https://www.google.com/search?q=ten+dr+express+11022+running+status&"

// console.log(url.includes("google"));

// const score = new Number(122)

// console.log(score.toFixed(2));

// const min = 10 
// const max = 20 

// console.log(Math.floor(Math.random()*((max-min)+1)+min));


// const myArr = [0,1,2,3,4,5,6]

// const myArr1 = [0,1,2,3,4,5,6]


// myArr.shift()
// console.log(myArr)                       

          
// myArr.push(7,8,9)
// myArr1.pop()                       //---------- example of push and pop
// console.log(myArr,myArr1)


// console.log(myArr1.slice(1,3)); //example of slice 
// console.log(myArr1);

// console.log(myArr.splice(1,3));//exaple of splice 
// console.log(myArr);
                                                                        

//Objects------------------------->>>>

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "shubham",
//     [mySym]:"mykey1",
//     age: 25,
//     location: "sangli",
//     email:"shubham.nagaonkar99@gmail.com",
//     isLoggedIn:false,
//     lastLoggingDay:["monday","saturday"]
// }

// console.log(JsUser[mySym]);


// JsUser.gretting = function(){
//     console.log(`hii bro, ${this.name} `)
// }

// console.log(JsUser.gretting())

// console.log(JsUser);

// --------------------------------------------------------------------------->>>>>>

// Object Singleton?

// const newUser = new Object()

// newUser.id = 123
// newUser.name = "mrsn"
// newUser.isLoggedIn = false

// console.log(newUser)

// const newUser2 = {
//     email: "shubham@gamil.com",
//     fullname: {
//         username:"mrsn",
//         firstname:"shubham",
//         // lastname:"nagaonkar"
//     }
// }

// console.log(newUser2.fullname.lastname)


// const obj1 = {1:"shubham", 2:"nagaonkar"}

// const obj2 = {3:"akash", 4:"Naga"}

// //How to combine objects

// const obj3 = Object.assign({},obj1,obj2)  //method 1

// const obj3 = {...obj1, ...obj2}    //method 2

// console.log(obj3);


// ------------------------------------------------------->>>>>>>


// const arr = [{name:"s"},]
// console.log(arr[0]);



const newUser2 = {
    email: "shubham@gamil.com",
    fullname: {
        username:"mrsn",
        firstname:"shubham",
        // lastname:"nagaonkar"
    }
}

console.log(Object.keys(newUser2))
console.log(Object.values(newUser2))
console.log(Object.entries(newUser2))
console.log(newUser2.has);
