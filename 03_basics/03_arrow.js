const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = 'sam';
user.welcomeMessage();

console.log(this); // => expected output in node : {}

// => Window object is the global object inside the browser or, Inside the browser the global object is window object

// that is why we can capture all the event from window object like click, form submit

function chai(){
    let username = "hitesh";
    console.log(this.username); // expected output: undefined
}

chai();

const chai = function () {
    let username = "hitesh";
    console.log(this.username); // expected output: undefined
}

const chai = () => {
    let username = "hitesh";
    console.log(this); // => expected output: {}
    console.log(this.username); // expected output: undefined
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2; // implicit return
// const addTwo = (num1, num2) => (num1 + num2); // implicit return
const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach()