// singleton 
// Object.create() // => through constructor method

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // mySym: "mykey1", // wrong syntax/way to add a symbol inside the object
    [mySym]: "mykey1", // correct way/syntax to add a symbol inside the object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(typeof(JsUser.mySym));
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser); // after freezing value cannot be changed
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    return ("Hello JS user");
}
JsUser.greetingTwo = function(){
    return (`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());