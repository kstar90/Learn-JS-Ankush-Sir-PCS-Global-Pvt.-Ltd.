const marvelHeroes = ["Thor", "Iron Man", "Spider-Man"];
const dcHeroes = ["Super Man", "Flash", "Bat-Man"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// concat operator
let hero = marvelHeroes.concat(dcHeroes);
// console.log(hero);

// spread operator
const all_new_heroes = [...marvelHeroes, ...dcHeroes];
// console.log(all_new_heroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_anotherArr = anotherArr.flat(Infinity);
// console.log(real_anotherArr);


// Array.isArray("hitesh");

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); // Interesting topic

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));