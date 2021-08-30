//
// jQuery
//

// Explain the utility of the jQuery object (“$”)
// '$' is a selector. You use it to select an object from the HTML and do actions on it.

// Selection of DOM elements (CSS, ID, Name, etc)
// $('.item1').css('color', 'blue');
$('table').css('color', 'red');
// $(':submit').css('color', 'red');
// $('a[href="newpage.html"]').css('color', 'red');
// Work with collections of elements
$('table td:odd').css('background-color', 'lightgrey');
$('table').css('background-color', '#333');
// $('table tr:nth-child(2n)').css('color', 'black');

// Listening for and reacting to events on DOM elements
// $('#restartBtn').click(function () {
//   alert('Restarted!');
// });

// Creating/appending/prepending DOM elements
// $('h1').addClass('subText');
// $('.item1').append('thank you thank you.');
// $('.item1').prepend('introducing...');

// Modifying existing DOM elements (attributes, content)
// $('.item4').text(
//   'I changed it! I changed it all! Now I have to fill up this space with something. Oh well.'
// );

// Removing DOM elements
// remove(),replace()

// Perform basic animations (slide up/down,toggle,stop)
$('#fadeOut').click(function () {
  $('#naruto').fadeOut('slow');
});
$('#fadeIn').click(function () {
  $('#naruto').fadeIn('slow');
});

$('#goonDune').click(function () {
  let dude = $('#goonDune');
  dude.animate({
    left: 600,
  });
  dude.animate({
    top: 200,
  });
  dude.animate({
    left: 0,
    top: 200,
  });
  dude.animate({
    top: 0,
    left: 0,
  });
});

// Integrate 3rd party plugins to get functionality without having to create it

//
// Javascript Developer 3
//

// Setting/clearing Timeouts and Intervals
let popUp;
let runCount = 0;

function sayHello() {
  runCount++;
  if (runCount > 4) {
    clearInterval(popUp);
  }
  console.log('Hello!');
}

popUp = setInterval(sayHello, 1000);

//The this Keyword refers to the object it belongs to.
const person = {
  firstName: 'Bryce',
  lastName: 'Richardson!',
  age: '25',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
document.getElementById('me').innerHTML = person.fullName();
console.log(person.fullName());

//You can access properties on an object using Bracket notation
let myFirstName = person['firstName'];
console.log(myFirstName);
// Dot notation can't use variables
let myLastName = person.lastName;
console.log(myLastName);

// JSON is a text format for storing and transporting data
// With JSON.parse() data becomes a JavaScript object.
const txt = '{"name":"Jane", "age":28, "city":"New York"}';
const gal = JSON.parse(txt);
console.log(gal.name + ', ' + gal.age);

// With JSON.stringify a JavaScript object becomes a string.
const guy = { name: 'John', age: 30, city: 'New York' };
const myJSON = JSON.stringify(guy);
console.log(myJSON);

// Built-In Array Iterators (forEach, indexOf, find, map, filter, reduce, some)

// forEach() method executes a function once for each array element.
const funnyWords = ['flub', 'boycan', 'nutterbutter'];
funnyWords.forEach((items) => console.log(items));

// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const wheresWaldo = ['Sally', 'Brian', 'Waldo', 'Elaina'];
console.log(wheresWaldo.indexOf('Waldo'));
console.log(wheresWaldo.indexOf('Jim'));

// Map() method is used for creating a new array from an existing one
let numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => item * 2);
console.log(doubled);

// The filter() method takes each element in an array and it applies a conditional statement against it.

const nicknames = [
  'Bobbybones',
  'Smoke',
  'Bounce',
  'Brykee',
  'Brykeeball',
  333,
];
const newWords = nicknames.filter((word) => word.length <= 6);
console.log(newWords);

// The reduce() method reduces an array of values down to just one value.
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

// some() method tests whether at least one element in the array passes the test implemented by the provided function.
const humans = [3, 10, 11, 22];
humans.some(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(humans.some(checkAdult));

// Prevent form postback with preventDefault on register.js

// Promises (.all, .race)
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve('Success');
  } else {
    reject('Failed');
  }
});

p.then((message) => {
  console.log('This is is in the ' + message);
}).catch((message) => {
  console.log('This is in the catch ' + message);
});

// Async/Await (await makes JavaScript wait until that promise settles and returns its result.)
async function doWork() {
  try {
    p = await p;
    return p;
    console.log('Awesome!');
  } catch {
    console.log('error');
  }
}
console.log(doWork());
// doWork();

// popular conventions for indentation and code style
// camelCase, space around operators, 2 space indentation

//
// Stopwatch
//

// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, '0');
  let formattedSS = ss.toString().padStart(2, '0');
  let formattedMS = ms.toString().padStart(2, '0');

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById('display').innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  hide();
}

function pause() {
  clearInterval(timerInterval);
  show();
}

function reset() {
  clearInterval(timerInterval);
  print('00:00:00');
  elapsedTime = 0;
  show();
}

function hide() {
  playButton.style.display = 'none';
}

function show() {
  playButton.style.display = 'block';
}

// Create event listeners

let playButton = document.getElementById('startBtn');
let pauseButton = document.getElementById('stopBtn');
let resetButton = document.getElementById('restartBtn');

playButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
