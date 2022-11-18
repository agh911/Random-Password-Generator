// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt('How many characters would you like your password to be?');
  var chosenOptions = [];
  for (var i = 0; i < length; i++) {
    if (length < 10 || length > 64) {
      confirm('Password must be at least 10 characters, but no more than 64. Please try again.');
    } else {
      var upperCase = confirm('Would you like your password to contain upper case letters?');
      if (upperCase) {
        chosenOptions.push(upperCasedCharacters);
      }
      var lowerCase = confirm('Would you like your password to contain lower case letters?');
      if (lowerCase) {
        chosenOptions.push(lowerCasedCharacters);
      }
      var numbers = confirm('Would you like your password to contain numbers?');
      if (numbers) {
        chosenOptions.push(numericCharacters);
      }
      var specialChar = confirm('Would you like your password to contain symbols?');
      if (specialChar) {
        chosenOptions.push(specialCharacters);
      }
      if (chosenOptions == 0) {
        alert('At least one character set must be chosen. Please try again.')
      }
    }
  }
  return (chosenOptions);
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  return
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
