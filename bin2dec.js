// elements
const userInput = document.getElementById('userInput');
const convertButton = document.getElementById('convertButton');
const output = document.getElementById('output');

// event listenters
convertButton.addEventListener('click', convert);

// Functions
/* 
  convert
  If input is valid, convert it
  else will warn the user to correct their input
*/
function convert() {
  const input = userInput.value;
  if (isValid(input)) { 
    displayResult(bin2dec(input));
  }
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
