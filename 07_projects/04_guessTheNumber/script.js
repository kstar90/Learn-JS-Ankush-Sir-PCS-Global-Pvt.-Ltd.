console.log(Math.floor(Math.random() * 100 + 1)); // generating random number from 1 to 100

let randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0; // start at 0 because we increment on first guess
let maxGuesses = 10;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};

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
        displayGuess(guess);
        checkGuess(guess);
    };
};

function checkGuess(guess){
    // print the message
    if (guess === randomNumber) {
        displayMessage('WOW !! You guessed it right');
        endGame();
    } else if (numGuess >= maxGuesses) {
        displayMessage(`Game Over! random number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is too high`);
    };
};

function displayGuess(guess){
    // display the guess
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    const guessesLeft = maxGuesses - numGuess - 1; // Update remaining guesses after increment
    remaining.innerHTML = `${guessesLeft}`;
    numGuess++;
};

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
};

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        displayMessage("");
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0; // Reset numGuess for the new game
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        // console.log(randomNumber)
    });
};