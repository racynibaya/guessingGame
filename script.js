'use strict';

// Global variables
const score = document.querySelector('.score');
let highestScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const btnAgain = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Functions
const message = function (message) {
  document.querySelector('.message').textContent = message;
};

const init = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  score.textContent = 20;
  body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  message('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').blur();
};

const checkAnswer = function () {
  const guess = +document.querySelector('.guess').value;

  if (typeof guess === 'NaN') message('That is not a Number!');
  if (!guess) {
    message('⛔ No Number!');
    return;
  }

  if (guess > 20) {
    message('Hanngang 20 lang!!');
    return;
  }

  if (guess === secretNumber) {
    message('🎉 Correct Number');
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').blur();
    // if highscore is higher than score do nothing
    highestScore.textContent > +score.textContent
      ? (highestScore.textContent = highestScore.textContent)
      : (highestScore.textContent = score.textContent);
  } else if (guess > secretNumber) {
    message('📈 Too high');
    score.textContent = Number(score.textContent) - 1;
  } else if (guess < secretNumber) {
    message('📉 Too low!');
    score.textContent = Number(score.textContent) - 1;
  }
};

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 11;
// console.log(document.querySelector('.guess').value);

// Click Event;
document.querySelector('.check').addEventListener('click', checkAnswer);

btnAgain.addEventListener('click', init);

body.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') checkAnswer();
});

body.addEventListener('keypress', function (event) {
  if (event.key.toLowerCase() === 'a') init();
});
