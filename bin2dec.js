// elements
const userInput = document.getElementById('userInput');
const convertButton = document.getElementById('convertButton');

// event listenters
convertButton.addEventListener('click', function() {
  let input = userInput.value;
  if (isValid(input)) { 
    bin2dec(input) 
  }
  // run bin2dec function here
});

function isValid(input) {
  const validChars = ['1', '0'];
  for (let i = 0; i <input.length; i++) {
    const char =input[i];
    if (validChars.includes(char) === false) { 
      return false;
    }
  } return true;
}

function bin2dec(inputString) {
  let decimal = parseInt(inputString, 2);
  return decimal;
}