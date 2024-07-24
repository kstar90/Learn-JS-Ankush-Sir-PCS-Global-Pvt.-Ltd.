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
// console.log(id); => Symbol('123')
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

console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myFunction);