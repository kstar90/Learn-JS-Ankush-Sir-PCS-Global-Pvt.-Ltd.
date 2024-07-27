// const tinderUser = new Object(); // => singleton object
const tinderUser = {}; // => non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        ownerFullName: {
            firstName: "hitesh",
            lastName: "choudhary",
            work: "teaching"
        },
        userFullName: {
            firstName: "ankush",
            lastName: "adhikari",
            work: "studying"
        }
    }
}

console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = { obj1, obj2 }; // *IMPORTANT*
// const obj3 = Object.assign({}, obj1, obj2, obj4); // *IMPORTANT*
const obj3 = {...obj1, ... obj2, ...obj4}; // Spread

console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "a@gmail.com",
    },
    {
        id: 3,
        email: "b@gmail.com",
    }
]

console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));