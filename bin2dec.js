// elements
const inputLabel = document.getElementById('inputLabel');
const inputLabelOneZero=document.getElementById('inputLabelOneZero');
const userInput = document.getElementById('userInput');
const convertButton = document.getElementById('convertButton');
const output = document.getElementById('output');
const textWarning = "warning";
const inputWarning = "inputWarning";

// event listenters
convertButton.addEventListener('click', convert);

// Functions
function getInput() {
  return userInput.value;
}
/* 
  Functions to add / remove warning styles
*/
function addClass(e, className) {
  e.classList.add(className);
}
function removeClass(e, className) {
  e.classList.remove(className);
}
function clearWarnings() {
  removeClass(inputLabel, "warning");
  removeClass(inputLabelOneZero, "warning");
  removeClass(userInput, "inputWarning");
}
/* 
  isValid(string)
  returns true if the string only contains 1's and 0's
  returns false otherwise.
*/
function isValid(input) {
  const validChars = ['1', '0'];
  for (let i = 0; i <input.length; i++) {
    const char =input[i];
    if (validChars.includes(char) === false) { 
      return false;
    }
  } return true;
}
/* 
  bin2dec(string)
  takes any string consisting of 1's and 0's only
  and converts it's corresponding Integer value;
*/
function bin2dec(inputString) {
  let decimal = parseInt(inputString, 2);
  return decimal;
}
/* 
  displayResult
  update the output element with a result string
*/
function displayResult(result) {
  output.innerHTML = result;
}
/* 
  convert
  If input is valid, convert it
  else will warn the user to correct their input
*/
function convert() {
  const input = getInput();
  if (input.length === 0) {
    // Warn when no input provided
    clearWarnings();
    addClass(inputLabel, textWarning);
    addClass(userInput, inputWarning);
  } else if (isValid(input) === false) {
    // Warn when input is invalid
    clearWarnings();
    addClass(inputLabelOneZero, textWarning);
    addClass(userInput, inputWarning);
  } else {
    // perform conversion of valid input
    clearWarnings();
    displayResult(bin2dec(input));
  }
}
