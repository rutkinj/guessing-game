'use strict'; //require strict syntax

let userName = prompt('Hi, what\'s your name?');
console.log(userName);
let welcomeMsg = 'Hello, ' + userName + '! Welcome to my page. Now you have to take a MeQuiz!';
alert(welcomeMsg);

let q1 = 'Am I pretty tall?';
let q2 = 'Am I currently learning HTML, CSS, and JS?';
let q3 = 'Am I a picky eater?';
let q4 = 'Do I wear glasses?';
let q5 = 'Am I a cool guy?';
let yesOrNo = ' y/n ';
let answer ='';

//question 1
answer = prompt(q1 + yesOrNo);
if (typeof(answer) === 'string'){
  answer = answer.toLowerCase();
}

if (answer === 'y'){
  alert('You got it!');
  console.log('You got it!');
} else if (answer === 'n'){
  console.log('wrong');
} else {
  console.log('User is not following directions...');
}

//question 2
answer = prompt(q2 + yesOrNo);
if (typeof (answer) === 'string') {
  answer = answer.toLowerCase();
}

if (answer === 'y') {
  alert('You got it!');
  console.log('You got it!');
} else if (answer === 'n') {
  console.log('wrong');
} else {
  console.log('User is not following directions...');
}

//question 3
answer = prompt(q3 + yesOrNo);
if (typeof (answer) === 'string') {
  answer = answer.toLowerCase();
}

if (answer === 'y') {
  console.log('wrong');
} else if (answer === 'n') {
  alert('That\'s right!');
  console.log('That\'s right!');
} else {
  console.log('User is not following directions...');
}

//question 4
answer = prompt(q4 + yesOrNo);
if (typeof (answer) === 'string') {
  answer = answer.toLowerCase();
}

if (answer === 'y') {
  alert('Wow! You got it!');
  console.log('right');
} else if (answer === 'n') {
  console.log('wrong');
} else {
  console.log('User is not following directions...');
}

//question 5
answer = prompt(q5 + yesOrNo);
if (typeof (answer) === 'string') {
  answer = answer.toLowerCase();
}

if (answer === 'y') {
  alert('Hey, thanks!!');
  console.log('Hey, thanks!!');
} else if (answer === 'n') {
  alert('Well, that\'s a matter of opinion.');
  console.log('Well, that\'s a matter of opinion.');
} else {
  console.log('I\'ll just assume you think I\'m cool');
}


