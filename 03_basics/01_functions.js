
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNum(num1, num2){  // here num1 & num2 is parameters
    // console.log(num1+num2);;
// }

function addTwoNum(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1+num2;
}

const result = addTwoNum(3, 4);  // here num1 & num2 is arguments

// console.log(`Result: ${result}`);

function loginUserMessage(username = "sam"){
    if(!username){  //  same as => if(username===undefined)
        console.log("Please Enter a username");
        return 0;
    }
    return `${username} just logged in`;
}

// loginUserMessage("Ankush");
// console.log(loginUserMessage("Ankush"));
console.log(loginUserMessage(`Ankush`));

function calculateCartPrice(val1, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 1200));

const user = {
    username: "hitesh",
    prices: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399,
});


const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));  // => expected output: 400

console.log(returnSecondValue([200, 400, 100, 600]));