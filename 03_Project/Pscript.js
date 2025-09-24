let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit = addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (userInput.value.trim() === '') {
    displayMessage('Please enter a number.');
    return;
  }
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
    return;
  } else if (guess > 100) {
    alert(`Please enter a less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === randomNumber) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guess it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO high `);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loOrHi.innerHTML = `<h1>${message}</h2>`;
}

function endGame(params) {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id= newGame>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector('#newGame');
  newGamebtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
