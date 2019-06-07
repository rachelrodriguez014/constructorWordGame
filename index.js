// Link to word.js and letter.js
var Word = require("./word");
var Letter = require("./letter")

var word = new Word();
var letter = new Letter();
// Dependency for inquirer npm package...remember to initialize and install package.
var inquirer = require("inquirer");

// Creating global game variables
var animalArray = ["camel", "ostrich", "zebra", "elephant", "walrus", "badger", "kangaroo", "aardvark", "hippopotamus", "raccoon"];
var guessesLeft = 8
var randWord = "";
var guessWord = "";
var newWord;
var lettersLeft;



function newGame() {
    randWord = "";
    var rand = parseInt(Math.floor(Math.random() * animalArray.length));
    randWord = animalArray[rand];
}

function displayWord() {
    guessWord = newWord.wordString();
    console.log(guessWord);
    newWord.compare = guessWord;
}

function gamePrompt() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter!"
    }]).then(function (response) {
        var userGuess = response.ask;

        if (guessesLeft > 0) {

            if (userGuess.length === 1) {
                newWord.guess(userGuess);
                guessWord = newWord.wordString()

                if (newWord.compare === guessWord) {
                    console.log("Sorry, no", userGuess, "in the word! :(");
                    lives--;
                    console.log("You only have", guessesLeft, "guesses left")
                    if (guessesLeft === 0) {
                        gameOver()
                    }
                    else {
                        print();
                        gamePrompt();
                    };
                }
                else {
                    console.log("You guessed correct!")
                    lettersLeft--
                    print();
                    if (guessesLeft === 0) {
                        console.log("You got the word right!! Try this one...");
                        newGame();
                        print();
                        gamePrompt();
                    }
                    else {
                        gamePrompt();
                    }
                }
            }
            else if (userGuess.length === 0) {
                console.log("You must choose a letter!");
                gamePrompt();
            }
            else {
                console.log("You can only choose one letter at a time!");
                gamePrompt();
            }

        }
        else {
            gameOver();
        };
    });
};

function print() {
    console.log("\n")
    console.log("******************************************")
    displayWord()
    console.log("\n*****************************************")
    console.log("\n")
};

function gameOver() {
    console.log("Game Over!!!");
    inquirer.prompt([{
        type: "confirm",
        name: "anotherGame",
        message: "Wanna play again?"
    }]).then(function (response) {
        if (response.anotherGame) {
            newGame()
            print()
            guess();
        }
        else {
            console.log("Maybe next time!");
        };
    });
};


newGame();
print();
gamePrompt();
