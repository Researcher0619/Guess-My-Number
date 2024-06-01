'use strict';

// Function to display a message in the '.message' element
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to set the background color and number width
const setStyles = function (bgColor, width) {
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.number').style.width = width;
};

// Function to update the score
const updateScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    setStyles('#60b347', '30rem');

    // Update the highscore if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
});

// Event listener for the "Again" button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  updateScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  setStyles('#222', '15rem');
});
