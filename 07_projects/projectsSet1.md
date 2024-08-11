# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution

```javascript
console.log("Ankush");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
    })
});
```

## project 2 solution

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span>`;
    }
});
```

## project 3 solution

```javascript
// const clock = document.querySelector('#clock');

const clock = document.getElementById('clock');
// let date = new Date();
// console.log(date.toLocaleTimeString);

setInterval(function(){
    let date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 solution

```javascript
console.log(parseInt(Math.random() * 100 + 1)); // generating random number from 1 to 100

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let maxGuesses = 10;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // validate the guess
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number higher than 1');
    } else if(guess > 100){
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // print the message
    if (guess === randomNumber) {
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    // display the guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${maxGuesses - numGuess + 1}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        // console.log(randomNumber)
    })
}
```

## project 5 solution

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e)=> {
    insert.innerHTML = 
    `
        <div class="color">
            <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});
```

## project 6 solution

```javascript
// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    };
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    } else {
        alert("Color changer is already running!!");
    };
    function changeBgColor(){
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor(),` ${localTime}`);
    };
};
const stopChangingColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    } else {
        alert("Please start the color changer first!!");
    };
};

// console.log(Math.floor(Math.random() * 16));
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```