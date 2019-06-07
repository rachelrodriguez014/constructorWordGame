// Create constructor function (Word) that is dependent on Letter constructor. Create an object that represents the current word user is trying to guess

// Must define 
// An array of new Letter objects that represent the letters of underlying word
// Function that returns string representing the word...Must call the function on each letter object
// Function that takes character as arguemnt and calls the guess function on each letter object

// Require letter.js file
var letter = require("./letter");

function Word(word) {
    this.word = " ";
    this.letterArr = [];
    this.check = " ";
    for (var i = 0; i < word.length; i++) {
        this.letterArr.push(new letter(word[i]))
    }
    this.wordString = function () {
        var newWordString = "";
        for (var a = 0; a < this.letterArr.length; a++) {
            newWordString += this.letterArr[a].letterGuessed() + " ";
        }
        return newWordString;
    }
    this.check = function (input) {
        for (var b = 0; b < this.letterArr.length; b++) {
            this.letterArr[b].check(input);
        };
    };
};

module.exports = Word;