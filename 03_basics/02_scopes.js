// var c = 300;
let a = 300; // => global scope

if(true) {
    let a = 10; // => block scope
    const b = 20;
    console.log("Inner: ",a); // => block scope
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a); // => global scope
// console.log(b);
// console.log(c);