// Create constructor function  (Letter)  that will display a character or placeholder if correct letter is guessed or not

// String value to store character

// Boolean value to store whether or not correct letter has been guessed

// Function that returns underlying character if correct letter has been guessed

// Function that takes in character as argument and checks it against the underlying characters...updating the boolean value ot true if it was guessed

function Letter(letter) {
    this.letter = letter;
    this.choice = false;
    this.guess = function (input) {
        if (input === this.letter) {
            this.choice === true;
        }
    }
    this.letterGuessed = function () {
        if (this.choice === false) {
            return "-";
        }
        else {
            return this.letter;
        };
    };

};

module.exports = Letter;