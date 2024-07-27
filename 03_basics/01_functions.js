
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