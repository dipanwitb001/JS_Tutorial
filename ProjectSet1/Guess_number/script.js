const randomNumber = parseInt(Math.random() *100 +1 );

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){

    }
)}

function validateGuess(guess){

}

function checkGuess(guess){

}

function displayGuess(guess){
}

function displayMessage(message){

}

function newGame (){

}
function endGame(){

}