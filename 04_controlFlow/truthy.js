// when we assume that string will have true value and we not comparising that is called truthy value

// const userEmail = "h@hitesh.ai";
// const userEmail = "";
const userEmail = [];

if (userEmail) {
    console.log("Got the user Email");
} else {
    console.log("Don't have user Email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN (not a number)


// truthy values
// "0", 'false', " ", [], {}, function(){}, (this is an empty function)

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

false == 0 // => true
false == '' // => true
0 == '' // => true



// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10; // => output: 5
// val1 = null ?? 10; // => output: 10
// val1 = undefined ?? 15; //  => output: 15

val1 = null ?? 10 ?? 15;


console.log(val1);


// Ternary Operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");