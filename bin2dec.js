// elements
const userInput = document.getElementById('userInput');
const convertButton = document.getElementById('convertButton');

// event listenters
convertButton.addEventListener('click', function() {
  const input = getInput();
  const isValidInput = isValid(input);
});

// functions

function getInput() {
  console.log("getInput() called!");
  console.log(`Input: ${userInput.value}`);
  return userInput.value;
}

function isValid(input) {
  console.log("isValid() called!");
  const validChars = ['1', '0'];
  for (let i = 0; i <input.length; i++) {
    const char =input[i];
    if (validChars.includes(char) === false) {
      console.log(`isValid: false`);
      return false;
    }
  }
  console.log(`isValid: true`);
  return true;
}