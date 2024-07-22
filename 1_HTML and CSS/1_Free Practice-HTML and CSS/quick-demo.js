let button = document.querySelector('#test-button');
let body = document.querySelector('body');

console.log(button, body);

/** 
Get a random integer between 0 and 255
*/
function randomInt() {
  return Math.floor(Math.random() * 256);
}

/** 
Get a random RGB color.
*/
function randomColor() {
  return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}

button.addEventListener('click', function() {
  let backgroundColour = randomColor();
  let fontColour = randomColor();
  body.style.setProperty('color', fontColour);
  body.style.setProperty('background-color', backgroundColour);
});