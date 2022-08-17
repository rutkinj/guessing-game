'use strict'; //require strict syntax

let userName = prompt('Hi, what\'s your name?');
console.log(userName);
let welcomeMsg = 'Hello, ' + userName + '! Welcome to my page. Now you have to take a MeQuiz!';
alert(welcomeMsg);

let correctAnswers = 0;

/////////////// MAIN QUIZ /////////////////

let questions = ['Am I pretty tall?',
  'Am I currently learning HTML, CSS, and JS?',
  'Am I a picky eater?',
  'Do I wear glasses?',
  'Am I a cool guy?',];

let answers = ['y', 'y', 'n', 'y', 'y',];

for (let i = 0; i < questions.length; i++){

  let response = prompt(questions[i] + ' y/n');

  if (typeof(response) === 'string'){
    response = response.toLowerCase();

    if (response === answers[i]){
      alert('u got it!');
      correctAnswers++;
    } else {
      alert('u wrong!');
    }
  }
}

//////////////// NUMBER GUESSER /////////////////

let numGuessMessage = 'Guess a number between 1 and 10';
let targetNum = (Math.floor(Math.random() * 10) + 1).toString();
console.log(targetNum);
let numGuesses = 4;
let guessedRight = false;

while (numGuesses > 0){
  let guess = prompt(numGuessMessage);
  console.log(typeof(guess));
  if (guess < targetNum){
    alert('Nope, too low.');
    numGuesses--;
  } else if (guess > targetNum){
    alert('Nope, too high.');
    numGuesses--;
  } else if (guess === targetNum){
    alert('you got it! It was ' + targetNum);
    guessedRight = true;
    correctAnswers++;
    break;
  } else {
    alert('Hmm, I\'m not sure that was a number...');
  }
}
if (guessedRight === false){
  alert('You\'re out of guesses! The correct number was ' + targetNum);
}

//////////// MULTI ANSWER ///////////////////

let favFoods = [
  'pizza',
  'cheeseburgers',
  'pasta',
  'cheese',
  'kale',
  'rice',
  'breakfast cereal',
  'butter',
  'ice cream',
  'potato chips',
  'broccoli',
  'pears',
  'peaches',
  'cherries',
  'lentils'
];

let numFoodGuesses = 6;
let foodGuessMessage = 'Guess one of my favorite foods. I\'ve got lots!';
let isGuessing = true;

while (numFoodGuesses > 0 && isGuessing){
  let response = prompt(foodGuessMessage);
  if (typeof(response) === 'string'){
    response = response.toLowerCase();
    console.log(response);
  }
  for (let food of favFoods) {
    if (food === response){
      alert('You got one! ' + food + ' is one of my favorite foods!');
      correctAnswers++;
      isGuessing = false;
      break;
    }
  }
  if (!isGuessing){
    break;
  }
  alert('Nah, I like that, but, not a favorite...');
  numFoodGuesses--;
}
if (numFoodGuesses <= 0){
  alert('You ran out of guesses!');
}

let favFoodsAsString = '';

for (let food of favFoods){
  food += ', ';
  favFoodsAsString += food;
}
alert('Here are all my favorites: ' + favFoodsAsString +'but I\'m sure there\'s more, really.');
alert('All right, you made it to the end, wow, impressive! Here is your final score: ' + correctAnswers + '/7! You tried!');
