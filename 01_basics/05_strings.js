const name = "Ankush";
const repoCount = 10;

// console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpollation

// const gameName = new String('ankush&hm');
const gameName = new String('hitesh-hc-com');

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

let index = -1;
while ((index = gameName.indexOf('h', index + 1)) !== -1) {
  console.log(`Found 'h' at index: ${index}`);
}

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-13, 2);
console.log(anotherString);

const newStringOne = "   ankush    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('ankush'));

console.log(gameName.split('-'));