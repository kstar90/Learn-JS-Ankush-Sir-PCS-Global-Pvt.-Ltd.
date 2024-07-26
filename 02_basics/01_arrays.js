// array

// array is an object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// The array in JavaScript are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexs, but must be accessed using nonnegative integers (or their respective string form) as indexes

// JavaScript arrays are zero-indexed; the first element of an array is at index 0; the second is at index 1; and so on - and the last element is the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too --- and so, you may end up unintentionally causing changes to the source or copy that you do not expect. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"];
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ['Spidy', 'Iron Man'];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // => removes the value of the last index in array

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);