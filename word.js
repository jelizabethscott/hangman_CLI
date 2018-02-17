var wordBank = require("./letter.js");

//Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
//Create the constructor function to create the word objects
function Word(word) {
    this.letters = word.split("").map(function(value) {
        return new Letter(value);
    });
}
//Look into [function prototypes] and use them for a few of your constructor's methods.
//Create prototype function for the word.js to process with the letter.js functions. 
Word.prototype.results = function() {
    return this.letters.map(function(letter) {
        return letter.results();
        //Join the characters and pass a string from the array of letters
    }).join('');
}

//Use the toString() method to concatenate the word in the string
//Refer to Letter.prototype.toString function in Letter.js
Word.prototype.toString = function() {
    return this.letters.join(' ');
};

Word.prototype.guessLetter = function(value) {
    //Create variable to check the letters in the array and to match the user's guess
    var gotLetter = false;
    this.letters.forEach(function(letter) {
        if (letter.guess(value)) {
            gotLetter = true;
        }
    });

    //Console log the guessed word and return the letter if correct
    console.log("\n" + this + "\n");
    return gotLetter;
};

//The letters.every method returns true if the callback function returns true for every element in the array
//If all letters in the word have been guessed show letters
Word.prototype.guessedCorrectly = function() {
    return this.letters.every(function(letter) {
        return letter.show;
    });
};











module.exports = word;