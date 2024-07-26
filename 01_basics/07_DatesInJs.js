// Dates

let myDate = new Date();
console.log();
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(myDate.getTimezoneOffset());

console.log(typeof myDate); // Date is a object in JavaScript

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-12-14");
// let myCreatedDate = new Date("11/07/1997");
// let myCreatedDate = new Date("11-07-1997");
// let myCreatedDate = new Date("11-07-1997");

let myBirthDate = new Date("1997-11-07");

console.log(myBirthDate.toDateString());
console.log(myBirthDate.toLocaleString());
console.log(myBirthDate.toLocaleTimeString());

let myTimeStampInMilliSecond = Date.now();
// console.log(myTimeStampInMilliSecond);
// console.log(myBirthDate.getTime());

let diff = (myTimeStampInMilliSecond - (myBirthDate.getTime()));
// let output = diff.getTime();
let ageInDays = ((((diff/1000)/60)/60)/24);
let myAge = Math.floor((ageInDays/365.25));

let remainingDays = ageInDays - (myAge*365.25);
let ageMonths = Math.floor(Math.floor(remainingDays/30.44));

remainingDays -= ageMonths*30.44-1;
let ageDays = Math.floor(remainingDays);

console.log(`My age is ${myAge} Years ${ageMonths} months and ${ageDays} days`); // ${} => string interpolation inside backticks

let newDate = new Date();
console.log(newDate.getMonth()); // => 0 means January and 11 means december
console.log(newDate.getDay()); // => 0 to 6 0 means monday and 6 means sunday

let now = newDate.toLocaleString('default', {
    weekday: "long",
});

console.log(now);