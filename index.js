// Link to word.js
var word = require("./word");
// Dependency for inquirer npm package...remember to initialize and install package.
var inquirer = require("inquirer");

// Create array of words to choose from
var animalArray = ["camel", "ostrich", "zebra", "elephant", "walrus", "badger", "kangaroo", "aardvark", "hippopotamus", "raccoon"];

// Pick a random index from the animalArray
var random = Math.floor(Math.random() * animalArray.length);
var randomWord = animalArray[random];
// console.log(randomWord);




// Store correct and incorrect guesses and number of guesses left
var correctGuess = [];
var incorrectGuess = [];
var guessesLeft = 10;
