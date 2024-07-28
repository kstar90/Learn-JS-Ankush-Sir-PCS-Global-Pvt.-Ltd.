// For of Loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if ("W" == greet ){
        console.log(`${greet} as in World??`);
        break;
    } else {
        console.log(`${greet}`);
    }
}

// Maps

// The "Map" object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value

// map objects are collections of key-value pairs

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('IN', "India");
map.set('Fr', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}

// const myObject = {
    // 'Game1': 'NFS',
    // 'Game2': 'Spider-Man'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }