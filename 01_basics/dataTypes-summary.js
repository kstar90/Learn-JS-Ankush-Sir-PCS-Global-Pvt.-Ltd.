// Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;  //typeof outsideTemp => object
// let userEmail = undefined; (manually declared)
let userEmail; // => undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // => false
console.log(typeof id); // => Symbol('123')
// console.log(anotherId); => Symbol('123')

// const bigNumber = 3456543576654356754n;

// Reference (Non Primitive) Datatypes

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Ankush",
    age: 22,
}

const myFunction = function(){
    console.log(`Hello World!`);
}

// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3 (study material)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive DataTypes), Heap(Reference/Non-Primitive DataTypes)

let myYoutubeName = "ankushadhikari@g.com";
let anotherName = myYoutubeName;
anotherName = "chai-aur-code";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ankush@google.com";

console.log(userOne.email);
console.log(userTwo.email);