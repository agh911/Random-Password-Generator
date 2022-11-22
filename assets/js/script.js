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

// Global variables
var passwordLength;
var upperCase;
var lowerCase;
var numbers;
var specialChar;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt('How many characters would you like your password to be?');
  while (passwordLength < 10 || passwordLength > 64 || passwordLength === '' || isNaN(passwordLength)) {
      confirm('Password must be at least 10 characters and no more than 64. Please try again.');
      passwordLength = prompt('Enter a valid number.\nHow many characters would you like your password to be?');
  } 
  if (passwordLength > 10 || passwordLength < 64 || passwordLength !== '' || !isNaN(passwordLength)) {
    // Prompts for getting and storing user options
    upperCase = confirm('Would you like your password to contain upper case letters?');
    lowerCase = confirm('Would you like your password to contain lower case letters?');
    numbers = confirm('Would you like your password to contain numbers?');
    specialChar = confirm('Would you like your password to contain symbols?');
    // Created "if" statement to ensure one option is selected for potential password.
    if (!upperCase && !lowerCase && !numbers && !specialChar) {
      alert('At least one character set must be chosen. Please try again.');
    }
  }
  return passwordLength;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomArrayIndex = Math.floor(Math.random() * arr.length);
  // Get random character from array
  var randomCharacter = arr[randomArrayIndex];
  return randomCharacter;
}

// Function to generate password with user input
function generatePassword() {
  //Call getPasswordOptions function to get prompts when clicking button
  getPasswordOptions();
  // Create variables to store user choices and the final password
  var chosenOptions = [];
  var finalPassword = '';
  // Create "if" statements to input desired data for potential password
  if (upperCase) {
    chosenOptions.push(upperCasedCharacters);
  }
  if (lowerCase) {
    chosenOptions.push(lowerCasedCharacters);
  }
  if (numbers) {
    chosenOptions.push(numericCharacters);
  }
  if (specialChar) {
    chosenOptions.push(specialCharacters);
  }
  // For loop to get random password based on requested length
  for (var i = 0; i < passwordLength; i++) {
    var randomCharArray = getRandom(chosenOptions);
    var randomChar = getRandom(randomCharArray);
    finalPassword += randomChar;
  }
  return finalPassword;
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
